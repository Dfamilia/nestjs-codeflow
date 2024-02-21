import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
  Logger,
} from '@nestjs/common';

// this is a GLOBAL EXCEPTIONS IMPLEMENTATIONS that will help us to
// to centrilize all exceptions events message like: BadRequest, Internal Errors, etc..
@Catch()
export class AllExceptionFilter implements ExceptionFilter {
  // Allows to log all the failure request events
  private readonly logger = new Logger(AllExceptionFilter.name);

  // Allow us to manage our exceptons manages
  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();

    // validate if we recive the status of a fail http event or we'll return a default message if not
    const status =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;

    const msg =
      exception instanceof HttpException ? exception.getResponse() : exception;

    this.logger.error(
      `Http Status: ${status} Error Message: ${JSON.stringify(msg)}`,
    );

    response.status(status).json({
      time: new Date().toISOString(),
      path: request.url,
      error: msg,
    });
  }
}
