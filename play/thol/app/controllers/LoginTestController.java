package controllers;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.SignatureException;
import io.jsonwebtoken.impl.crypto.MacProvider;
import play.*;
import play.mvc.*;
import services.authutils.PrivateKeyReader;
import services.authutils.PublicKeyReader;

import javax.crypto.SecretKey;
import javax.crypto.spec.SecretKeySpec;
import javax.inject.*;
import java.security.Key;
import java.security.PrivateKey;
import java.security.PublicKey;
import java.util.Base64;
import java.util.StringTokenizer;

/**
 * This controller demonstrates how to use dependency injection to
 * bind a component into a controller class. The class contains an
 * action that shows an incrementing count to users. The {@link Counter}
 * object is injected by the Guice dependency injection system.
 */
@Singleton
public class LoginTestController extends Controller {

    @Inject
    public LoginTestController() {

    }

    public Result loginTest() {
        String strAuthorization = request().getHeader("Authorization");

        StringTokenizer stringTokenizer = new StringTokenizer(strAuthorization);

        String authType = stringTokenizer.nextToken();

        System.out.println("AUTHTYPE " + authType);

        if(!authType.equals("Bearer")) {
            return unauthorized("Unsupported Authorization Type!!!");
        }

        String compactJws = stringTokenizer.nextToken();

        PublicKey keyPublicKey = null;

        String username = "Guest";

        try {

            keyPublicKey = PublicKeyReader.get("./conf/public_key.der");
        }
        catch(Exception e) {
            e.printStackTrace();
            return internalServerError("PublicKey oothikichu!");
        }

        try {

            username = Jwts.parser().setSigningKey(keyPublicKey).parseClaimsJws(compactJws).getBody().getSubject();

            //OK, we can trust this JWT

        } catch (SignatureException signatureException) {
            System.out.println("AskuBusku. You are trying to aemath meyaaa???");
            return unauthorized("AskuBusku. You are trying to aemath meyaaa???");
        } catch (Exception e) {

            e.printStackTrace();
            //don't trust the JWT!
        }

        return ok("Welcome " + username);
    }
}
