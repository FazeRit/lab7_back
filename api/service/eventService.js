import prisma from '../db/db.js';   
import { ApiError } from '../errors/apiError.js';

export default class EventService {
    static async getEvents() {
        const events = await prisma.event.findMany({ orderBy: { eventTime: 'asc' } });
        return events;
    }

    static async addEvent(eventTime, eventType, message) {
        const event = await prisma.event.create({
            data: { eventTime: new Date(eventTime), eventType, message },
        });

        return event;
    }

    static async deleteEvents() {
        await prisma.event.deleteMany();

        return true;    
    }
}