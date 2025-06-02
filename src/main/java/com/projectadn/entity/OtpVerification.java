package com.projectadn.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "otp_verification")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class OtpVerification {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String email;
    private String otp;

    @Column(name = "expiration_time")
    private LocalDateTime expirationTime;
}
