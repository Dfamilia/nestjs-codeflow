import { ArgumentsHost, ExceptionFilter, Logger } from '@nestjs/common';

// this is a GLOBAL EXCEPTIONS IMPLEMENTATIONS that will help us to
// to centrilize all exceptions events message like: BadRequest, Internal Errors, etc..
export class AllExceptionFilter implements ExceptionFilter {
  // Allows to log all the failure request events
  private readonly logger = new Logger(AllExceptionFilter.name);

  //
  catch(exception: any, host: ArgumentsHost) {
    throw new Error('Method not implemented.');
  }
}
