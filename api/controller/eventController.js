import { validationResult } from "express-validator";

import EventService from "../service/eventService.js";
import { ApiError } from "../errors/apiError.js";

export default class EventController {
    static async getEvents(req, res, next){
        try{
            const data = await EventService.getEvents();

            return res.status(200).json({data});
        }catch(err){    
            next(err);
        }
    }

    static async addEvents(req, res, next) {
        try {
            const { eventTime, eventType, message } = req.body;

            if (!eventTime || !eventType || !message) {
                return ApiError.BadRequestError('Missing required fields');
            }

            const event = await EventService.addEvent(eventTime, eventType, message);

            return res.status(201).json({ data: event });
        } catch (err) {
            next(err);
        }
    }    

    static async deleteEvents(req, res, next){
        try{
            const errors = validationResult(req);
            if(!errors.isEmpty()){
                return res.status(400).json({errors: errors.array()});
            }

            await EventService.deleteEvents();
            return res.status(200).json({message: 'Events deleted'});
        }catch(err){
            next(err);
        }
    }
}
