// source: ReqProto.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.protocol.BaseReq', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.protocol.BaseReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocol.BaseReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocol.BaseReq.displayName = 'proto.protocol.BaseReq';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.protocol.BaseReq.prototype.toObject = function(opt_includeInstance) {
  return proto.protocol.BaseReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocol.BaseReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.BaseReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    ops: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    target: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    type: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f,
    content: (f = jspb.Message.getField(msg, 6)) == null ? undefined : f,
    bytescontent: msg.getBytescontent_asB64(),
    uri: (f = jspb.Message.getField(msg, 10)) == null ? undefined : f,
    token: (f = jspb.Message.getField(msg, 30)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.protocol.BaseReq}
 */
proto.protocol.BaseReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocol.BaseReq;
  return proto.protocol.BaseReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocol.BaseReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocol.BaseReq}
 */
proto.protocol.BaseReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setOps(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTarget(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setType(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setContent(value);
      break;
    case 7:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setBytescontent(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setUri(value);
      break;
    case 30:
      var value = /** @type {string} */ (reader.readString());
      msg.setToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.protocol.BaseReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocol.BaseReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocol.BaseReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.BaseReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeString(
      2,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 6));
  if (f != null) {
    writer.writeString(
      6,
      f
    );
  }
  f = /** @type {!(string|Uint8Array)} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeBytes(
      7,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 10));
  if (f != null) {
    writer.writeString(
      10,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 30));
  if (f != null) {
    writer.writeString(
      30,
      f
    );
  }
};


/**
 * required int32 ops = 1;
 * @return {number}
 */
proto.protocol.BaseReq.prototype.getOps = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.protocol.BaseReq} returns this
 */
proto.protocol.BaseReq.prototype.setOps = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.protocol.BaseReq} returns this
 */
proto.protocol.BaseReq.prototype.clearOps = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocol.BaseReq.prototype.hasOps = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string target = 2;
 * @return {string}
 */
proto.protocol.BaseReq.prototype.getTarget = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.protocol.BaseReq} returns this
 */
proto.protocol.BaseReq.prototype.setTarget = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.protocol.BaseReq} returns this
 */
proto.protocol.BaseReq.prototype.clearTarget = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocol.BaseReq.prototype.hasTarget = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional int32 type = 5;
 * @return {number}
 */
proto.protocol.BaseReq.prototype.getType = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.protocol.BaseReq} returns this
 */
proto.protocol.BaseReq.prototype.setType = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.protocol.BaseReq} returns this
 */
proto.protocol.BaseReq.prototype.clearType = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocol.BaseReq.prototype.hasType = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string content = 6;
 * @return {string}
 */
proto.protocol.BaseReq.prototype.getContent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.protocol.BaseReq} returns this
 */
proto.protocol.BaseReq.prototype.setContent = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.protocol.BaseReq} returns this
 */
proto.protocol.BaseReq.prototype.clearContent = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocol.BaseReq.prototype.hasContent = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional bytes bytesContent = 7;
 * @return {!(string|Uint8Array)}
 */
proto.protocol.BaseReq.prototype.getBytescontent = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * optional bytes bytesContent = 7;
 * This is a type-conversion wrapper around `getBytescontent()`
 * @return {string}
 */
proto.protocol.BaseReq.prototype.getBytescontent_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getBytescontent()));
};


/**
 * optional bytes bytesContent = 7;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getBytescontent()`
 * @return {!Uint8Array}
 */
proto.protocol.BaseReq.prototype.getBytescontent_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getBytescontent()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.protocol.BaseReq} returns this
 */
proto.protocol.BaseReq.prototype.setBytescontent = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.protocol.BaseReq} returns this
 */
proto.protocol.BaseReq.prototype.clearBytescontent = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocol.BaseReq.prototype.hasBytescontent = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional string uri = 10;
 * @return {string}
 */
proto.protocol.BaseReq.prototype.getUri = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.protocol.BaseReq} returns this
 */
proto.protocol.BaseReq.prototype.setUri = function(value) {
  return jspb.Message.setField(this, 10, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.protocol.BaseReq} returns this
 */
proto.protocol.BaseReq.prototype.clearUri = function() {
  return jspb.Message.setField(this, 10, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocol.BaseReq.prototype.hasUri = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional string token = 30;
 * @return {string}
 */
proto.protocol.BaseReq.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 30, ""));
};


/**
 * @param {string} value
 * @return {!proto.protocol.BaseReq} returns this
 */
proto.protocol.BaseReq.prototype.setToken = function(value) {
  return jspb.Message.setField(this, 30, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.protocol.BaseReq} returns this
 */
proto.protocol.BaseReq.prototype.clearToken = function() {
  return jspb.Message.setField(this, 30, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocol.BaseReq.prototype.hasToken = function() {
  return jspb.Message.getField(this, 30) != null;
};


goog.object.extend(exports, proto.protocol);
