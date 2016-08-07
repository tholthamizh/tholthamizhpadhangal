package services;

import javax.inject.Singleton;
import java.io.File;
import java.util.Arrays;
import java.util.List;
import java.util.Scanner;
import java.util.stream.Collectors;
import java.util.stream.Stream;


@Singleton
public class FileService {
    public String getFileContent(String absolutePath) throws Exception {
        return new Scanner(new File(absolutePath)).useDelimiter("\\Z").next();
    }

    public List<String> getDirectoryContent(String absolutePath) throws Exception {
        File directory = new File(absolutePath);
        List<File> subdirectories = Arrays.asList(directory.listFiles());

        Stream<String> subdirectoryNamesStream = subdirectories.stream().map((subdirectory) -> subdirectory.getName());

        List<String> subdirectoryNames = subdirectoryNamesStream.collect(Collectors.toList());
        return subdirectoryNames;
    }
}
