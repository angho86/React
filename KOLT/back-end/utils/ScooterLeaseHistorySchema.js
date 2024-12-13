import { z } from "zod";

export const ScooterLeaseHistoryCreateValidation = z.object({
    city: z
        .string({ message: "City parameter must be a string"})
        .min(2, { message: "City length must be longer than 2 symbols"})
        .max(120, {message: "City length should not be longer than 120 symbols"}),

    startingRideKm: z
        .number({message: "startingRideKm must be a number"})
        .min(0, {message: "startingRideKm should be a positive number"})
        .max(1000000, { message: "startingRideKm shiuld be less than 1mln"}),
});