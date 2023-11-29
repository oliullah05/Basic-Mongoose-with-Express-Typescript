import { z } from 'zod';

const Month = z.enum([
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
]);

export const createAcademicSemistervalidationSchema = z.object({
    body: z.object({
        name: z.enum(['autumn', 'summer', 'fall']),
        code: z.enum(['01', '02', '03']),
        year: z.date(),
        startMonth: Month,
        endMonth: Month,
    })
});



