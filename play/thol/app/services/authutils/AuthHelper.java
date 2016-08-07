package services.authutils;

/**
 * Created by I069162 on 8/7/2016.
 */
public class AuthHelper {
    public static boolean isValidUser(String username, String password) {
        return (username.equalsIgnoreCase("xadhix") && password.equals("Password1"));
    }
}
