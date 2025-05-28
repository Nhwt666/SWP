package com.projectadn.service;

import com.projectadn.entity.OtpVerification;
import com.projectadn.entity.User;
import com.projectadn.repository.OtpVerificationRepository;
import com.projectadn.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Optional;
import java.util.Random;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;
    private final OtpVerificationRepository otpRepository;
    private final EmailService emailService;

    public String register(User userInput) {
        if (userRepository.existsByEmail(userInput.getEmail())) {
            return "Email đã tồn tại";
        }

        userInput.setRole("CUSTOMER");
        userRepository.save(userInput);
        return "Đăng ký thành công";
    }

    public boolean login(String email, String password) {
        return userRepository.findByEmail(email)
                .map(u -> u.getPassword().equals(password))
                .orElse(false);
    }
}
