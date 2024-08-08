package com.myasset.myasset.utils;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

@SuppressWarnings("rawtypes")
public class CommonUtils {
    
    public static ResponseEntity getHttpResponseEntity(String result) {
        if(result != "") return new ResponseEntity<>(result, HttpStatus.OK);
 
        return new ResponseEntity<>(result, HttpStatus.BAD_REQUEST);    
    }
}
