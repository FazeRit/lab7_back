import { Router } from 'express';

import EventController from '../controller/eventController.js';

const router = Router();

router.get('/', EventController.getEvents);    

router.post(
    '/add',
    EventController.addEvents
);  

router.delete('/clear',
    EventController.deleteEvents);

export default router;