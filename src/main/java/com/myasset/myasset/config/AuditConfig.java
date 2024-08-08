package com.myasset.myasset.config;

import java.util.Optional;

import org.springframework.context.annotation.Configuration;
import org.springframework.data.domain.AuditorAware;

@SuppressWarnings("rawtypes")
@Configuration
public class AuditConfig implements AuditorAware{

    @SuppressWarnings("null")
    @Override
    public Optional<String> getCurrentAuditor() {
        //추후 로그인 오픈하면 로그인한 사용자 id넣어주기
        return Optional.of("admin");
    }
    
}
