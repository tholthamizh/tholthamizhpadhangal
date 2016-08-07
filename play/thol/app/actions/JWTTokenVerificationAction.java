package actions;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureException;
import play.Logger;
import play.mvc.Http;
import play.mvc.Result;
import services.authutils.PublicKeyReader;

import java.security.PublicKey;
import java.util.StringTokenizer;
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.CompletionStage;

import static play.mvc.Controller.request;

/**
 * Created by I069162 on 8/7/2016.
 */

public class JWTTokenVerificationAction extends play.mvc.Action.Simple {
    public CompletionStage<Result> call(Http.Context ctx) {
        Logger.info("Calling action for {}", ctx);

        String strAuthorization = request().getHeader("Authorization");

        if (strAuthorization == null) {

            return CompletableFuture.supplyAsync(() -> {
                return unauthorized("Unsupported Authorization Type!!!");
            });
        }

        StringTokenizer stringTokenizer = new StringTokenizer(strAuthorization);

        String authType = stringTokenizer.nextToken();

        System.out.println("AUTHTYPE " + authType);

        if (!authType.equals("Bearer")) {
            return CompletableFuture.supplyAsync(() -> {
                return unauthorized("Unsupported Authorization Type!!!");
            });
        }

        String compactJws = stringTokenizer.nextToken();

        PublicKey keyPublicKey = null;

        String username = "Guest";

        try {

            keyPublicKey = PublicKeyReader.get("./conf/public_key.der");
        } catch (Exception e) {
            e.printStackTrace();
            return CompletableFuture.supplyAsync(() -> {
                return internalServerError("PublicKey oothikichu!");
            });
        }

        Claims claims = null;

        try {

            claims = Jwts.parser().setSigningKey(keyPublicKey).parseClaimsJws(compactJws).getBody();
            username = claims.getSubject();

            //OK, we can trust this JWT

        } catch (SignatureException signatureException) {
            System.out.println("AskuBusku. You are trying to aemath meyaaa???");
            return CompletableFuture.supplyAsync(() -> {
                return unauthorized("AskuBusku. You are trying to aemath meyaaa???");
            });
        } catch (Exception e) {

            e.printStackTrace();
            //don't trust the JWT!
        }

        ctx.args.put("claims", claims);

        return delegate.call(ctx);
    }
}
