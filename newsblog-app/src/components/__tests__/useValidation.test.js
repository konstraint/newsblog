import { useValidation } from "../../hooks/useValidation";

test('test fields for validation', () => {
    expect(useValidation('email', 'absda', {'isEmail': true})).toBe('Email is invalid');
});