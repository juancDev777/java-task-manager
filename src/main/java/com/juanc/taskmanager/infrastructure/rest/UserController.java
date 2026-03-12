package com.juanc.taskmanager.infrastructure.rest;

import com.juanc.taskmanager.application.command.CreateUserCommand;
import com.juanc.taskmanager.application.command.UpdateUserCommand;
import com.juanc.taskmanager.application.dto.UserResponseDTO;
import com.juanc.taskmanager.application.service.UserCommandService;
import com.juanc.taskmanager.application.service.UserQueryService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
@RequestMapping("/api/users")
@RequiredArgsConstructor
public class UserController {

    private final UserCommandService userCommandService;
    private final UserQueryService userQueryService;

    @GetMapping
    public ResponseEntity<java.util.List<UserResponseDTO>> getAllUsers() {
        return ResponseEntity.ok(userQueryService.getAllUsers());
    }

    @PostMapping
    public ResponseEntity<UserResponseDTO> registerUser(@Valid @RequestBody CreateUserCommand command) {
        UserResponseDTO response = userCommandService.handle(command);
        return ResponseEntity.status(HttpStatus.CREATED).body(response);
    }

    @PutMapping("/{id}")
    public ResponseEntity<UserResponseDTO> updateUser(
            @PathVariable UUID id,
            @Valid @RequestBody UpdateUserCommand command) {
        command.setId(id);
        UserResponseDTO response = userCommandService.handle(command);
        return ResponseEntity.ok(response);
    }

    @GetMapping("/{id}")
    public ResponseEntity<UserResponseDTO> getUser(@PathVariable UUID id) {
        UserResponseDTO response = userQueryService.getUserById(id);
        return ResponseEntity.ok(response);
    }
}
