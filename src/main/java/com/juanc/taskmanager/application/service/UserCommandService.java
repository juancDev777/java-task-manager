package com.juanc.taskmanager.application.service;

import com.juanc.taskmanager.application.command.CreateUserCommand;
import com.juanc.taskmanager.application.command.UpdateUserCommand;
import com.juanc.taskmanager.application.dto.UserResponseDTO;
import com.juanc.taskmanager.domain.model.User;
import com.juanc.taskmanager.domain.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.UUID;

@Service
@RequiredArgsConstructor
public class UserCommandService {

    private final UserRepository userRepository;

    @Transactional
    public UserResponseDTO handle(CreateUserCommand command) {
        if (userRepository.findByEmail(command.getEmail()).isPresent()) {
            throw new RuntimeException("Email already in use");
        }

        User user = User.builder()
                .id(UUID.randomUUID())
                .name(command.getName())
                .email(command.getEmail())
                .build();

        User savedUser = userRepository.save(user);
        return mapToDTO(savedUser);
    }

    @Transactional
    public UserResponseDTO handle(UpdateUserCommand command) {
        User user = userRepository.findById(command.getId())
                .orElseThrow(() -> new RuntimeException("User not found"));

        userRepository.findByEmail(command.getEmail())
                .ifPresent(existingUser -> {
                    if (!existingUser.getId().equals(user.getId())) {
                        throw new RuntimeException("Email already in use");
                    }
                });

        user.updateInfo(command.getName(), command.getEmail());
        User updatedUser = userRepository.save(user);
        return mapToDTO(updatedUser);
    }

    private UserResponseDTO mapToDTO(User user) {
        return UserResponseDTO.builder()
                .id(user.getId())
                .name(user.getName())
                .email(user.getEmail())
                .createdAt(user.getCreatedAt())
                .updatedAt(user.getUpdatedAt())
                .build();
    }
}
