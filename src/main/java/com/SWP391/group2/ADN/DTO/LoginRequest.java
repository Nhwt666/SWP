package com.SWP391.group2.ADN.DTO;


import lombok.*;

@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class LoginRequest {
    String email;
    String password;
}
