import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, timeout } from 'rxjs';

@Injectable()
export class TimeOutInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(timeout(10000));
  }
}

// Interceptan las peticiones que puedan ocurrir y duren mas que el tiempo que se establesca para disparar el interceptor
// Utilizades:
// Prevenir que una peticion dure mas del tiempo prudente para responder ante algun rechazo o lentitud de conexion.
