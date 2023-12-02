
/**
 * @typedef {(value: string) => string|null} ValidationRule
 */

/**
 * Validates a value against a set of rules.
 *
 * @param {string} value
 * @param {ValidationRule[]} rules
 * @returns {string|null}
 */
export function validate(value, rules) {
    for (let i = 0; i < rules.length; i++) {
        const errorMessage = rules[i](value);
        if (errorMessage) {
            return errorMessage;
        }
    }
    return null;
}

/**
 * Validates that a value is not empty.
 *
 * @param {string} errorMessage
 * @returns {ValidationRule}
 */
export function required(errorMessage) {
    return (value) => {
        if (!value) {
            return errorMessage || 'This field is required';
        }
        return null;
    };
}

/**
 * Validates that a sting is at least a certain length.
 *
 * @param {number} min
 * @param {string} errorMessage
 * @returns {ValidationRule}
 */
export function min(min, errorMessage) {
    return (value) => {
        if (value.length < min) {
            return errorMessage || `Must be at least ${min} characters`;
        }
        return null;
    };
}

/**
 * Validates that a sting is at most a certain length.
 *
 * @param {number} max
 * @param {string} errorMessage
 * @returns {ValidationRule}
 */
export function max(max, errorMessage) {
    return (value) => {
        if (value.length > max) {
            return errorMessage || `Must be at most ${max} characters`;
        }
        return null;
    };
}

/**
 * Validates that a value is the same as another value.
 *
 * @param {string} otherValue
 * @param {string} errorMessage
 * @returns {ValidationRule}
 */
export function confirmed(otherValue, errorMessage) {
    return (value) => {
        console.log(value, otherValue);
        if (value !== otherValue) {
            return errorMessage || 'Emails do not match';
        }
        return null;
    };
}

/**
 * Validates that a value matches a regular expression.
 *
 * @param {RegExp} regex
 * @param {string} errorMessage
 * @returns {ValidationRule}
 */
export function regex(regex, errorMessage) {
    return (value) => {

        if (!regex.test(value)) {
            return errorMessage || 'Invalid format';
        }
        return null;
    };
}

/**
 * Validates that a value is a valid email address.
 *
 * @param {string} errorMessage
 * @returns {ValidationRule}
 */
export function email(errorMessage) {
    return regex(/^.+@.+$/, errorMessage || 'Please enter a valid email address');
}

/**
 * Validates that a value is a valid phone number.
 *
 * @param {string} errorMessage
 * @returns {ValidationRule}
 */
export function phone(errorMessage) {
    const reg = /^\+?\d{1,3}(\s|-)?\(?(\d{3})\)?(\s|-)?(\d{3})(\s|-)?(\d{4})$/;
    return regex(reg, errorMessage || 'Please enter a full phone number with country code. E.g. +123 (345) 678-9012');
}
