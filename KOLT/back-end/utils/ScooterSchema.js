import z from "zod";

// rideTariffPerKm, rideTariffPerMin, registrationCode

export const ScooterCreateSchema = z.object({
    rideTariffPerKm: z
        .number({ message: "rideTariffPerKm must be a number"})
        .min(0, { message: "rideTarifffPerKm must be a positive number"})
        .max(10, { message: "rideTariffPerKm can't be longer then 10"}),

    leaseTariffPerMin: z
        .number({ message: "rideTariffPerMin must be a number"})
        .min(0, { message: "rideTarifffPerMin must be a positive number"})
        .max(10, { message: "rideTariffPerMin can't be longer then 10"}),

    registrationCode: z
        .string({ message: "registration code should be a string"})
        .min(8, {message: "registration code can't be shorter then 8 symbols"})
        .max(8, { message: "registration code can't be longer then 8 symbols"}),
 
});

export const ScooterUpdateSchema = ScooterCreateSchema.extend({
    isBusy: z.boolean({ message: "isBusy not a boolean ",}),
    lastUseTime: z
        .date({message: "lastUseDate should be a date"})
        .min(new Date(0), { message: "lastUseTime should not be earler than 1970-01-01",})
        .max(new Date()),

    totalRide: z
        .number({ message: "totalRide should be a number"})
        .min(0, {message: "totalRide should not be less than 0"})
        .max(1000000, { message: "totalRide should not be longer than 1mln"}),
}).partial();