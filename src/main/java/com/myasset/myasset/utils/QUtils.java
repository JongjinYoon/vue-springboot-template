package com.myasset.myasset.utils;

import java.util.Collection;

import org.springframework.util.CollectionUtils;
import org.springframework.util.StringUtils;
import com.querydsl.core.types.Predicate;
import com.querydsl.core.types.dsl.StringPath;


public class QUtils {    

    public static Predicate eq(StringPath stringPath, String column) {
        return StringUtils.hasText(column) ? stringPath.eq(column) : null;
    }

    public static Predicate contains(StringPath stringPath, String column) {
        return StringUtils.hasText(column) ? stringPath.contains(column) : null;
    }

    public static Predicate like(StringPath stringPath, String column) {
        return StringUtils.hasText(column) ? stringPath.like(column) : null;
    }

    public static Predicate and(StringPath stringPath, String column) {
        return StringUtils.hasText(column) ? stringPath.eq(column) : null;
    }
    
    public static Predicate in(StringPath path, Collection<String> values) {
        if (CollectionUtils.isEmpty(values)) {
            return null;
        }
        return path.in(values);
    }
    
}
