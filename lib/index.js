/* eslint-disable max-lines */
const StatusCodes = new Map([
  // 4xx
  [400, 'Bad Request'],
  [401, 'Unauthorized'],
  [402, 'Payment Required'],
  [403, 'Forbidden'],
  [404, 'Not Found'],
  [405, 'Method Not Allowed'],
  [406, 'Not Acceptable'],
  [407, 'Proxy Authentication Required'],
  [408, 'Request Time-out'],
  [409, 'Conflict'],
  [410, 'Gone'],
  [411, 'Length Required'],
  [412, 'Precondition Failed'],
  [413, 'Request Entity Too Large'],
  [414, 'Request-URI Too Large'],
  [415, 'Unsupported Media Type'],
  [416, 'Requested Range Not Satisfiable'],
  [417, 'Expectation Failed'],
  [418, 'I\'m a teapot'],
  [422, 'Unprocessable Entity'],
  [423, 'Locked'],
  [424, 'Failed Dependency'],
  [425, 'Unordered Collection'],
  [426, 'Upgrade Required'],
  [428, 'Precondition Required'],
  [429, 'Too Many Requests'],
  [431, 'Request Header Fields Too Large'],
  [451, 'Unavailable For Legal Reasons'],
  // 5xx
  [500, 'Internal Server Error'],
  [501, 'Not Implemented'],
  [502, 'Bad Gateway'],
  [503, 'Service Unavailable'],
  [504, 'Gateway Time-out'],
  [505, 'HTTP Version Not Supported'],
  [506, 'Variant Also Negotiates'],
  [507, 'Insufficient Storage'],
  [509, 'Bandwidth Limit Exceeded'],
  [510, 'Not Extended'],
  [511, 'Network Authentication Required']
]);

/**
 * (400) BadRequest
 * @param {string} message error message
 * @param {object} source error source
 * @param {string} code error code
 */
function BadRequest(message, source, code) {
  Error.call(this);
  this.status = 400;
  this.code = code || 'BAD_REQUEST';
  this.message = message || StatusCodes.get(this.status);
  this.title = StatusCodes.get(this.status);
  this.source = source;
  this.stack = new Error().stack;
}
Object.setPrototypeOf(BadRequest.prototype, Error.prototype);

/**
 * (401) Unauthorized
 * @param {string} message error message
 * @param {object} source error source
 * @param {string} code error code
 */
function Unauthorized(message, source, code) {
  this.status = 401;
  this.code = code || 'UNAUTHORIZED';
  this.message = message || StatusCodes.get(this.status);
  this.title = StatusCodes.get(this.status);
  this.source = source;
  this.stack = new Error().stack;
}
Object.setPrototypeOf(Unauthorized.prototype, Error.prototype);

/**
 * (402) PaymentRequired
 * @param {string} message error message
 * @param {object} source error source
 * @param {string} code error code
 */
function PaymentRequired(message, source, code) {
  this.status = 402;
  this.code = code || 'PAYMENT_REQUIRED';
  this.message = message || StatusCodes.get(this.status);
  this.title = StatusCodes.get(this.status);
  this.source = source;
  this.stack = new Error().stack;
}
Object.setPrototypeOf(PaymentRequired.prototype, Error.prototype);

/**
 * (403) Forbidden
 * @param {string} message error message
 * @param {object} source error source
 * @param {string} code error code
 */
function Forbidden(message, source, code) {
  this.status = 403;
  this.code = code || 'FORBIDDEN';
  this.message = message || StatusCodes.get(this.status);
  this.title = StatusCodes.get(this.status);
  this.source = source;
  this.stack = new Error().stack;
}
Object.setPrototypeOf(Forbidden.prototype, Error.prototype);

/**
 * (404) NotFound
 * @param {string} message error message
 * @param {object} source error source
 * @param {string} code error code
 */
function NotFound(message, source, code) {
  this.status = 404;
  this.code = code || 'NOT_FOUND';
  this.message = message || StatusCodes.get(this.status);
  this.title = StatusCodes.get(this.status);
  this.source = source;
  this.stack = new Error().stack;
}
Object.setPrototypeOf(NotFound.prototype, Error.prototype);

/**
 * (405) MethodNotAllowed
 * @param {string} message error message
 * @param {object} source error source
 * @param {string} code error code
 */
function MethodNotAllowed(message, source, code) {
  this.status = 405;
  this.code = code || 'METHOD_NOT_ALLOWED';
  this.message = message || StatusCodes.get(this.status);
  this.title = StatusCodes.get(this.status);
  this.source = source;
  this.stack = new Error().stack;
}
Object.setPrototypeOf(MethodNotAllowed.prototype, Error.prototype);

/**
 * (406) NotAcceptable
 * @param {string} message error message
 * @param {object} source error source
 * @param {string} code error code
 */
function NotAcceptable(message, source, code) {
  this.status = 406;
  this.code = code || 'NOT_ACCEPTABLE';
  this.message = message || StatusCodes.get(this.status);
  this.title = StatusCodes.get(this.status);
  this.source = source;
  this.stack = new Error().stack;
}
Object.setPrototypeOf(NotAcceptable.prototype, Error.prototype);

/**
 * (407) ProxyAuthenticationRequired
 * @param {string} message error message
 * @param {object} source error source
 * @param {string} code error code
 */
function ProxyAuthenticationRequired(message, source, code) {
  this.status = 407;
  this.code = code || 'PROXY_AUTHENTICATION_REQUIRED';
  this.message = message || StatusCodes.get(this.status);
  this.title = StatusCodes.get(this.status);
  this.source = source;
  this.stack = new Error().stack;
}
Object.setPrototypeOf(ProxyAuthenticationRequired.prototype, Error.prototype);

/**
 * (408) RequestTimeout
 * @param {string} message error message
 * @param {object} source error source
 * @param {string} code error code
 */
function RequestTimeout(message, source, code) {
  this.status = 408;
  this.code = code || 'REQUEST_TIMEOUT';
  this.message = message || StatusCodes.get(this.status);
  this.title = StatusCodes.get(this.status);
  this.source = source;
  this.stack = new Error().stack;
}
Object.setPrototypeOf(RequestTimeout.prototype, Error.prototype);

/**
 * (409) Conflict
 * @param {string} message error message
 * @param {object} source error source
 * @param {string} code error code
 */
function Conflict(message, source, code) {
  this.status = 409;
  this.code = code || 'CONFLICT';
  this.message = message || StatusCodes.get(this.status);
  this.title = StatusCodes.get(this.status);
  this.source = source;
  this.stack = new Error().stack;
}
Object.setPrototypeOf(Conflict.prototype, Error.prototype);

/**
 * (410) Gone
 * @param {string} message error message
 * @param {object} source error source
 * @param {string} code error code
 */
function Gone(message, source, code) {
  this.status = 410;
  this.code = code || 'GONE';
  this.message = message || StatusCodes.get(this.status);
  this.title = StatusCodes.get(this.status);
  this.source = source;
  this.stack = new Error().stack;
}
Object.setPrototypeOf(Gone.prototype, Error.prototype);

/**
 * (411) LengthRequired
 * @param {string} message error message
 * @param {object} source error source
 * @param {string} code error code
 */
function LengthRequired(message, source, code) {
  this.status = 411;
  this.code = code || 'LENGTH_REQUIRED';
  this.message = message || StatusCodes.get(this.status);
  this.title = StatusCodes.get(this.status);
  this.source = source;
  this.stack = new Error().stack;
}
Object.setPrototypeOf(LengthRequired.prototype, Error.prototype);

/**
 * (412) PreconditionFailed
 * @param {string} message error message
 * @param {object} source error source
 * @param {string} code error code
 */
function PreconditionFailed(message, source, code) {
  this.status = 412 || 'PRECONDITION_FAILED';
  this.code = code;
  this.message = message || StatusCodes.get(this.status);
  this.title = StatusCodes.get(this.status);
  this.source = source;
  this.stack = new Error().stack;
}
Object.setPrototypeOf(PreconditionFailed.prototype, Error.prototype);

/**
 * (413) RequestEntityTooLarge
 * @param {string} message error message
 * @param {object} source error source
 * @param {string} code error code
 */
function RequestEntityTooLarge(message, source, code) {
  this.status = 413;
  this.code = code || 'REQUEST_ENTITY_TOO_LARGE';
  this.message = message || StatusCodes.get(this.status);
  this.title = StatusCodes.get(this.status);
  this.source = source;
  this.stack = new Error().stack;
}
Object.setPrototypeOf(RequestEntityTooLarge.prototype, Error.prototype);

/**
 * (414) RequestUriTooLong
 * @param {string} message error message
 * @param {object} source error source
 * @param {string} code error code
 */
function RequestUriTooLong(message, source, code) {
  this.status = 414;
  this.code = code || 'REQUEST_URI_TOO_LONG';
  this.message = message || StatusCodes.get(this.status);
  this.title = StatusCodes.get(this.status);
  this.source = source;
  this.stack = new Error().stack;
}
Object.setPrototypeOf(RequestUriTooLong.prototype, Error.prototype);

/**
 * (415) UnsupportedMediaType
 * @param {string} message error message
 * @param {object} source error source
 * @param {string} code error code
 */
function UnsupportedMediaType(message, source, code) {
  this.status = 415;
  this.code = code || 'UNSUPPORTED_MEDIA_TYPE';
  this.message = message || StatusCodes.get(this.status);
  this.title = StatusCodes.get(this.status);
  this.source = source;
  this.stack = new Error().stack;
}
Object.setPrototypeOf(UnsupportedMediaType.prototype, Error.prototype);

/**
 * (416) RequestRangeNotSatisfiable
 * @param {string} message error message
 * @param {object} source error source
 * @param {string} code error code
 */
function RequestRangeNotSatisfiable(message, source, code) {
  this.status = 416;
  this.code = code || 'REQUESTED_RANGE_NOT_SATISFIABLE';
  this.message = message || StatusCodes.get(this.status);
  this.title = StatusCodes.get(this.status);
  this.source = source;
  this.stack = new Error().stack;
}
Object.setPrototypeOf(RequestRangeNotSatisfiable.prototype, Error.prototype);

/**
 * (417) ExpectationFailed
 * @param {string} message error message
 * @param {object} source error source
 * @param {string} code error code
 */
function ExpectationFailed(message, source, code) {
  this.status = 417;
  this.code = code || 'EXPECTATION_FAILED';
  this.message = message || StatusCodes.get(this.status);
  this.title = StatusCodes.get(this.status);
  this.source = source;
  this.stack = new Error().stack;
}
Object.setPrototypeOf(ExpectationFailed.prototype, Error.prototype);

/**
 * (418) Teapot
 * @param {string} message error message
 * @param {object} source error source
 * @param {string} code error code
 */
function Teapot(message, source, code) {
  this.status = 418;
  this.code = code || 'I_AM_A_TEAPOT';
  this.message = message || StatusCodes.get(this.status);
  this.title = StatusCodes.get(this.status);
  this.source = source;
  this.stack = new Error().stack;
}
Object.setPrototypeOf(Teapot.prototype, Error.prototype);

/**
 * (422) UnprocessableEntity
 * @param {string} message error message
 * @param {object} source error source
 * @param {string} code error code
 */
function UnprocessableEntity(message, source, code) {
  this.status = 422;
  this.code = code || 'UNPROCESSABLE_ENTITY';
  this.message = message || StatusCodes.get(this.status);
  this.title = StatusCodes.get(this.status);
  this.source = source;
  this.stack = new Error().stack;
}
Object.setPrototypeOf(UnprocessableEntity.prototype, Error.prototype);

/**
 * (423) Locked
 * @param {string} message error message
 * @param {object} source error source
 * @param {string} code error code
 */
function Locked(message, source, code) {
  this.status = 423;
  this.code = code || 'LOCKED';
  this.message = message || StatusCodes.get(this.status);
  this.title = StatusCodes.get(this.status);
  this.source = source;
  this.stack = new Error().stack;
}
Object.setPrototypeOf(Locked.prototype, Error.prototype);

/**
 * (424) FailedDependency
 * @param {string} message error message
 * @param {object} source error source
 * @param {string} code error code
 */
function FailedDependency(message, source, code) {
  this.status = 424;
  this.code = code || 'FAILED_DEPENDENCY';
  this.message = message || StatusCodes.get(this.status);
  this.title = StatusCodes.get(this.status);
  this.source = source;
  this.stack = new Error().stack;
}
Object.setPrototypeOf(FailedDependency.prototype, Error.prototype);

/**
 * (428) PreconditionRequired
 * @param {string} message error message
 * @param {object} source error source
 * @param {string} code error code
 */
function PreconditionRequired(message, source, code) {
  this.status = 428;
  this.code = code || 'PRECONDITION_REQUIRED';
  this.message = message || StatusCodes.get(this.status);
  this.title = StatusCodes.get(this.status);
  this.source = source;
  this.stack = new Error().stack;
}
Object.setPrototypeOf(PreconditionRequired.prototype, Error.prototype);

/**
 * (429) TooManyRequests
 * @param {string} message error message
 * @param {object} source error source
 * @param {string} code error code
 */
function TooManyRequests(message, source, code) {
  this.status = 429;
  this.code = code || 'TOO_MANY_REQUESTS';
  this.message = message || StatusCodes.get(this.status);
  this.title = StatusCodes.get(this.status);
  this.source = source;
  this.stack = new Error().stack;
}
Object.setPrototypeOf(TooManyRequests.prototype, Error.prototype);

/**
 * (431) RequestHeaderFieldsTooLarge
 * @param {string} message error message
 * @param {object} source error source
 * @param {string} code error code
 */
function RequestHeaderFieldsTooLarge(message, source, code) {
  this.status = 431;
  this.code = code || 'REQUEST_HEADER_FIELDS_TOO_LARGE';
  this.message = message || StatusCodes.get(this.status);
  this.title = StatusCodes.get(this.status);
  this.source = source;
  this.stack = new Error().stack;
}
Object.setPrototypeOf(RequestHeaderFieldsTooLarge.prototype, Error.prototype);

/**
 * (451) UnavailabelForLegalReasons
 * @param {string} message error message
 * @param {object} source error source
 * @param {string} code error code
 */
function UnavailabelForLegalReasons(message, source, code) {
  this.status = 451;
  this.code = code || 'UNAVAILABLE_FOR_LEGAL_REASONS';
  this.message = message || StatusCodes.get(this.status);
  this.title = StatusCodes.get(this.status);
  this.source = source;
  this.stack = new Error().stack;
}
Object.setPrototypeOf(UnavailabelForLegalReasons.prototype, Error.prototype);

/**
 * (500) InternalServerError
 * @param {string} message error message
 * @param {object} source error source
 * @param {string} code error code
 */
function InternalServerError(message, source, code) {
  this.status = 500;
  this.code = code || 'INTERNAL_SERVER_ERROR';
  this.message = message || StatusCodes.get(this.status);
  this.title = StatusCodes.get(this.status);
  this.source = source;
  this.stack = new Error().stack;
}
Object.setPrototypeOf(InternalServerError.prototype, Error.prototype);

/**
 * (501) NotImplemented
 * @param {string} message error message
 * @param {object} source error source
 * @param {string} code error code
 */
function NotImplemented(message, source, code) {
  this.status = 501;
  this.code = code || 'NOT_IMPLEMENTED';
  this.message = message || StatusCodes.get(this.status);
  this.title = StatusCodes.get(this.status);
  this.source = source;
  this.stack = new Error().stack;
}
Object.setPrototypeOf(NotImplemented.prototype, Error.prototype);

/**
 * (502) BadGateway
 * @param {string} message error message
 * @param {object} source error source
 * @param {string} code error code
 */
function BadGateway(message, source, code) {
  this.status = 502;
  this.code = code || 'BAD_GATEWAY';
  this.message = message || StatusCodes.get(this.status);
  this.title = StatusCodes.get(this.status);
  this.source = source;
  this.stack = new Error().stack;
}
Object.setPrototypeOf(BadGateway.prototype, Error.prototype);

/**
 * (503) ServerUnavailable
 * @param {string} message error message
 * @param {object} source error source
 * @param {string} code error code
 */
function ServerUnavailable(message, source, code) {
  this.status = 503;
  this.code = code || 'SERVICE_UNAVAILABLE';
  this.message = message || StatusCodes.get(this.status);
  this.title = StatusCodes.get(this.status);
  this.source = source;
  this.stack = new Error().stack;
}
Object.setPrototypeOf(ServerUnavailable.prototype, Error.prototype);

/**
 * (504) GatewayTimeout
 * @param {string} message error message
 * @param {object} source error source
 * @param {string} code error code
 */
function GatewayTimeout(message, source, code) {
  this.status = 504;
  this.code = code || 'GATEWAY_TIMEOUT';
  this.message = message || StatusCodes.get(this.status);
  this.title = StatusCodes.get(this.status);
  this.source = source;
  this.stack = new Error().stack;
}
Object.setPrototypeOf(GatewayTimeout.prototype, Error.prototype);

/**
 * (505) HttpVersionNotSupported
 * @param {string} message error message
 * @param {object} source error source
 * @param {string} code error code
 */
function HttpVersionNotSupported(message, source, code) {
  this.status = 505;
  this.code = code || 'VERSION_NOT_SUPPORTED';
  this.message = message || StatusCodes.get(this.status);
  this.title = StatusCodes.get(this.status);
  this.source = source;
  this.stack = new Error().stack;
}
Object.setPrototypeOf(HttpVersionNotSupported.prototype, Error.prototype);

/**
 * (507) InsufficientStorage
 * @param {string} message error message
 * @param {object} source error source
 * @param {string} code error code
 */
function InsufficientStorage(message, source, code) {
  this.status = 507;
  this.code = code || 'INSUFFICIENT_STORAGE';
  this.message = message || StatusCodes.get(this.status);
  this.title = StatusCodes.get(this.status);
  this.source = source;
  this.stack = new Error().stack;
}
Object.setPrototypeOf(InsufficientStorage.prototype, Error.prototype);

/**
 * (508) LoopDetected
 * @param {string} message error message
 * @param {object} source error source
 * @param {string} code error code
 */
function LoopDetected(message, source, code) {
  this.status = 508;
  this.code = code || 'LOOP_DETECTED';
  this.message = message || StatusCodes.get(this.status);
  this.title = StatusCodes.get(this.status);
  this.source = source;
  this.stack = new Error().stack;
}
Object.setPrototypeOf(LoopDetected.prototype, Error.prototype);

/**
 * (510) NotExtended
 * @param {string} message error message
 * @param {object} source error source
 * @param {string} code error code
 */
function NotExtended(message, source, code) {
  this.status = 510;
  this.code = code || 'NOT_EXTENDED';
  this.message = message || StatusCodes.get(this.status);
  this.title = StatusCodes.get(this.status);
  this.source = source;
  this.stack = new Error().stack;
}
Object.setPrototypeOf(NotExtended.prototype, Error.prototype);

/**
 * (511) NetworkAuthenticationRequired
 * @param {string} message error message
 * @param {object} source error source
 * @param {string} code error code
 */
function NetworkAuthenticationRequired(message, source, code) {
  this.status = 511;
  this.code = code || 'NETWORK_AUTHENTICATION_REQUIRED';
  this.message = message || StatusCodes.get(this.status);
  this.title = StatusCodes.get(this.status);
  this.source = source;
  this.stack = new Error().stack;
}
Object.setPrototypeOf(NetworkAuthenticationRequired.prototype, Error.prototype);

module.exports = {
  BadRequest,
  Unauthorized,
  PaymentRequired,
  Forbidden,
  NotFound,
  MethodNotAllowed,
  NotAcceptable,
  ProxyAuthenticationRequired,
  RequestTimeout,
  Conflict,
  Gone,
  LengthRequired,
  PreconditionFailed,
  RequestEntityTooLarge,
  RequestUriTooLong,
  UnsupportedMediaType,
  RequestRangeNotSatisfiable,
  ExpectationFailed,
  Teapot,
  UnprocessableEntity,
  Locked,
  FailedDependency,
  PreconditionRequired,
  TooManyRequests,
  RequestHeaderFieldsTooLarge,
  UnavailabelForLegalReasons,
  InternalServerError,
  NotImplemented,
  BadGateway,
  ServerUnavailable,
  GatewayTimeout,
  HttpVersionNotSupported,
  InsufficientStorage,
  LoopDetected,
  NotExtended,
  NetworkAuthenticationRequired
};
