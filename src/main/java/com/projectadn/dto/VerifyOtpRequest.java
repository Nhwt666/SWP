package com.projectadn.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class VerifyOtpRequest {
    private String email;
    private String otp;
    private String password;
    private String fullName;
    private String phone;
    private String address;
}
