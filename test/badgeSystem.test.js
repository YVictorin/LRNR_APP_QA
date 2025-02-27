import { describe, it, expect, beforeEach } from "vitest";
import { updateXP, updateStreak } from "../src/utils/badgeSystem";
import { User } from "../src/utils/index";

let user;

// no need to create a user in each test suite 
// this will create new user instance before each test
beforeEach(() => {
    user = new User("Yonjou", "Victorin", "yzv", "123");
});

describe("add xp to the user properly", () => {
    it("should increase the user's xp for non-custom topics that are correct", () => {
        const xpAmount = 10;
        const topicOfXp = "javascript";

        updateXP(user, xpAmount, topicOfXp);
        expect(user.javascriptXp).toBe(10);
    });

    it("should not increase the user's xp for non-custom topics that are incorrect", () => {
        const xpAmount = 0;
        const topicOfXp = "coffee";

        updateXP(user, xpAmount, topicOfXp);
        expect(user.coffeeXp).toBe(0);
    });
});

describe("handle streak for correct and incorrect answers", () => {
    it("should increase streak by one per correct answer", () => {
        updateStreak(user);
        updateStreak(user);
        updateStreak(user);

        expect(user.streak).toBe(3);
    });

    it("should remove user's streak for an incorrect answer", () => {
        let isCorrect = false;

        updateStreak(user, isCorrect);
        expect(user.streak).toBe(0);
    });
});
