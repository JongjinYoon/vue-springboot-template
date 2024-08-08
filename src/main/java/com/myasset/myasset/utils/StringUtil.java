package com.myasset.myasset.utils;

public class StringUtil {

    public String subString(String param, int beginIndex, int endIndex) {
        String str = "";
        str = param.substring(beginIndex, endIndex);
        return str;
    }
    
}
