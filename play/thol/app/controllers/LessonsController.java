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
public class LessonsController extends Controller {

    private final ActorSystem actorSystem;
    private final ExecutionContextExecutor exec;
    private final FileService fileService;
    private final String baseLocation;

    @Inject
    public LessonsController(ActorSystem actorSystem, ExecutionContextExecutor exec, FileService fileService) {
        this.actorSystem = actorSystem;
        this.exec = exec;
        this.fileService = fileService;
        this.baseLocation = "/var/thol/data/";
    }

    public CompletionStage<Result> lessons() {
        return CompletableFuture.supplyAsync(() -> {
            try {
                String lessonsIndex = baseLocation + "lessons" + "/" + "index.json";

                return Results.ok(fileService.getFileContent(lessonsIndex));
            } catch (Exception e) {
                return Results.internalServerError("Internal Server Error");
            }
        });
    }

    public CompletionStage<Result> lessonContent(String lesson) {
        return CompletableFuture.supplyAsync(() -> {
            try {
                String lessonDirectory = baseLocation + "lessons" + "/" + lesson;

                return Results.ok(fileService.getFileContent(lessonDirectory + "/" + "content.json"));

            } catch (Exception e) {
                return Results.internalServerError("Internal Server Error");
            }
        });
    }

    public CompletionStage<Result> lessonEvaluation(String lesson) {
        return CompletableFuture.supplyAsync(() -> {
            try {
                String lessonDirectory = baseLocation + "lessons" + "/" + lesson;

                return Results.ok(fileService.getFileContent(lessonDirectory + "/" + "evaluation.json"));

            } catch (Exception e) {
                return Results.internalServerError("Internal Server Error");
            }
        });
    }


}
