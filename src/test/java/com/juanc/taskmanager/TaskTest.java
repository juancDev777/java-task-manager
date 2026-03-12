package com.juanc.taskmanager;

import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class TaskTest {

    @Test
    public void testTaskCreation() {

        Task task = new Task("Study Java");

        assertEquals("Study Java", task.title);
        assertFalse(task.completed);
    }
}