package services;

import javax.inject.*;
import java.io.*;
import java.util.*;


@Singleton
public class FileService {
	public String getFileContent(String absolutePath) throws Exception{
		System.out.println(absolutePath);
		return new Scanner(new File(absolutePath)).useDelimiter("\\Z").next();
	}
}
