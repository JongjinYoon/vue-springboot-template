package com.myasset.myasset.entity.common;


import java.sql.Timestamp;

import org.springframework.data.annotation.CreatedBy;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedBy;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import jakarta.persistence.Column;
import jakarta.persistence.EntityListeners;
import jakarta.persistence.MappedSuperclass;
import lombok.Getter;
import lombok.ToString;

@EntityListeners(value = AuditingEntityListener.class)
@MappedSuperclass
@Getter
@ToString
public class BaseEntity {
    
    @CreatedDate
    @Column(name = "create_date", length = 100)
    private Timestamp createDate;    
    
    @LastModifiedDate
    @Column(name = "modify_date")
    private Timestamp modifyDate;

    @CreatedBy
    @Column(updatable = false, name = "create_user", length = 100)
    private String createUser;
    
    @LastModifiedBy
    @Column(name = "modify_user", length = 100)
    private String modifyUser;
}
