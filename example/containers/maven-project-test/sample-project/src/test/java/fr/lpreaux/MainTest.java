package fr.lpreaux;

import lombok.extern.java.Log;
import org.junit.jupiter.api.*;

import static org.junit.jupiter.api.Assertions.*;

@Log
class MainTest {

    @BeforeAll
    static void init() {
        log.info("@BeforeAll - executed once before all test methods in this class");
    }

    @BeforeEach
    void setUp() {
        log.info("@BeforeEach - executes before each test method in this class");
    }

    @AfterEach
    void tearDown() {
        log.info("@AfterEach - executed after each test method.");
    }

    @AfterAll
    static void done() {
        log.info("@AfterAll - executed once after all test methods in this class");
    }

    @DisplayName("Premier test")
    @Test
    void firstTest() {
        assertTrue(true);
    }

    @DisplayName("Second test")
    @Test
    void secondTest() {
        assertTrue(true);
    }
}
