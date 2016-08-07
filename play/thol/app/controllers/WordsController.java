package controllers;

import akka.actor.ActorSystem;
import play.mvc.Controller;
import play.mvc.Result;
import play.mvc.Results;
import scala.concurrent.ExecutionContextExecutor;
import services.FileService;

import javax.inject.Inject;
import javax.inject.Singleton;
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.CompletionStage;
import java.util.concurrent.Executor;

/**
 * This controller contains an action that demonstrates how to write
 * simple asynchronous code in a controller. It uses a timer to
 * asynchronously delay sending a response for 1 second.
 *
 * @param actorSystem We need the {@link ActorSystem}'s
 *                    {@link Scheduler} to run code after a delay.
 * @param exec        We need a Java {@link Executor} to apply the result
 *                    of the {@link CompletableFuture} and a Scala
 *                    {@link ExecutionContext} so we can use the Akka {@link Scheduler}.
 *                    An {@link ExecutionContextExecutor} implements both interfaces.
 */
@Singleton
public class WordsController extends Controller {

    private final ActorSystem actorSystem;
    private final ExecutionContextExecutor exec;
    private final FileService fileService;
    private final String baseLocation;

    @Inject
    public WordsController(ActorSystem actorSystem, ExecutionContextExecutor exec, FileService fileService) {
        this.actorSystem = actorSystem;
        this.exec = exec;
        this.fileService = fileService;
        this.baseLocation = "/var/thol/data/";
    }

    public CompletionStage<Result> words() {
        return CompletableFuture.supplyAsync(() -> {
            try {
                return Results.ok(fileService.getFileContent(baseLocation + "old_words/words.json"));
            } catch (Exception e) {
                return Results.internalServerError();
            }
        });
    }

    public CompletionStage<Result> word(String selWord) {
        return CompletableFuture.supplyAsync(() -> {
            try {
                return Results.ok(fileService.getFileContent(baseLocation + "old_words/words/" + java.net.URLDecoder.decode(selWord, "UTF-8") + ".json"));
            } catch (Exception e) {
                return Results.internalServerError();
            }
        });
    }

}
