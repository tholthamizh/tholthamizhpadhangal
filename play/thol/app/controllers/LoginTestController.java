package controllers;

import actions.JWTTokenVerificationAction;
import io.jsonwebtoken.Claims;
import play.mvc.Controller;
import play.mvc.Result;
import play.mvc.With;

import javax.inject.Inject;
import javax.inject.Singleton;

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

    @With(JWTTokenVerificationAction.class)
    public Result loginTest() {

        Claims claims = (Claims) ctx().args.get("claims");
        return ok("Welcome " + claims.getSubject());
    }
}
