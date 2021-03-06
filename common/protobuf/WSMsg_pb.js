// source: WSMsg.proto
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

goog.exportSymbol('proto.protocol.Msg', null, global);
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
proto.protocol.Msg = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.protocol.Msg, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.protocol.Msg.displayName = 'proto.protocol.Msg';
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
proto.protocol.Msg.prototype.toObject = function(opt_includeInstance) {
  return proto.protocol.Msg.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.protocol.Msg} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.Msg.toObject = function(includeInstance, msg) {
  var f, obj = {
    ops: (f = jspb.Message.getField(msg, 1)) == null ? undefined : f,
    code: (f = jspb.Message.getField(msg, 2)) == null ? undefined : f,
    msg: (f = jspb.Message.getField(msg, 3)) == null ? undefined : f,
    target: (f = jspb.Message.getField(msg, 5)) == null ? undefined : f,
    msgId: (f = jspb.Message.getField(msg, 6)) == null ? undefined : f,
    extend: (f = jspb.Message.getField(msg, 7)) == null ? undefined : f,
    type: (f = jspb.Message.getField(msg, 10)) == null ? undefined : f,
    content: (f = jspb.Message.getField(msg, 15)) == null ? undefined : f,
    bytesContent: msg.getBytesContent_asB64()
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
 * @return {!proto.protocol.Msg}
 */
proto.protocol.Msg.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.protocol.Msg;
  return proto.protocol.Msg.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.protocol.Msg} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.protocol.Msg}
 */
proto.protocol.Msg.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCode(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setMsg(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setTarget(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setMsgId(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setExtend(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setType(value);
      break;
    case 15:
      var value = /** @type {string} */ (reader.readString());
      msg.setContent(value);
      break;
    case 20:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setBytesContent(value);
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
proto.protocol.Msg.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.protocol.Msg.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.protocol.Msg} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.protocol.Msg.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = /** @type {number} */ (jspb.Message.getField(message, 1));
  if (f != null) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 2));
  if (f != null) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 3));
  if (f != null) {
    writer.writeString(
      3,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 5));
  if (f != null) {
    writer.writeString(
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
  f = /** @type {string} */ (jspb.Message.getField(message, 7));
  if (f != null) {
    writer.writeString(
      7,
      f
    );
  }
  f = /** @type {number} */ (jspb.Message.getField(message, 10));
  if (f != null) {
    writer.writeInt32(
      10,
      f
    );
  }
  f = /** @type {string} */ (jspb.Message.getField(message, 15));
  if (f != null) {
    writer.writeString(
      15,
      f
    );
  }
  f = /** @type {!(string|Uint8Array)} */ (jspb.Message.getField(message, 20));
  if (f != null) {
    writer.writeBytes(
      20,
      f
    );
  }
};


/**
 * optional int32 ops = 1;
 * @return {number}
 */
proto.protocol.Msg.prototype.getOps = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.protocol.Msg} returns this
 */
proto.protocol.Msg.prototype.setOps = function(value) {
  return jspb.Message.setField(this, 1, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.protocol.Msg} returns this
 */
proto.protocol.Msg.prototype.clearOps = function() {
  return jspb.Message.setField(this, 1, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocol.Msg.prototype.hasOps = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int32 code = 2;
 * @return {number}
 */
proto.protocol.Msg.prototype.getCode = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.protocol.Msg} returns this
 */
proto.protocol.Msg.prototype.setCode = function(value) {
  return jspb.Message.setField(this, 2, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.protocol.Msg} returns this
 */
proto.protocol.Msg.prototype.clearCode = function() {
  return jspb.Message.setField(this, 2, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocol.Msg.prototype.hasCode = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional string msg = 3;
 * @return {string}
 */
proto.protocol.Msg.prototype.getMsg = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.protocol.Msg} returns this
 */
proto.protocol.Msg.prototype.setMsg = function(value) {
  return jspb.Message.setField(this, 3, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.protocol.Msg} returns this
 */
proto.protocol.Msg.prototype.clearMsg = function() {
  return jspb.Message.setField(this, 3, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocol.Msg.prototype.hasMsg = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string target = 5;
 * @return {string}
 */
proto.protocol.Msg.prototype.getTarget = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.protocol.Msg} returns this
 */
proto.protocol.Msg.prototype.setTarget = function(value) {
  return jspb.Message.setField(this, 5, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.protocol.Msg} returns this
 */
proto.protocol.Msg.prototype.clearTarget = function() {
  return jspb.Message.setField(this, 5, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocol.Msg.prototype.hasTarget = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional string msg_id = 6;
 * @return {string}
 */
proto.protocol.Msg.prototype.getMsgId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.protocol.Msg} returns this
 */
proto.protocol.Msg.prototype.setMsgId = function(value) {
  return jspb.Message.setField(this, 6, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.protocol.Msg} returns this
 */
proto.protocol.Msg.prototype.clearMsgId = function() {
  return jspb.Message.setField(this, 6, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocol.Msg.prototype.hasMsgId = function() {
  return jspb.Message.getField(this, 6) != null;
};


/**
 * optional string extend = 7;
 * @return {string}
 */
proto.protocol.Msg.prototype.getExtend = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.protocol.Msg} returns this
 */
proto.protocol.Msg.prototype.setExtend = function(value) {
  return jspb.Message.setField(this, 7, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.protocol.Msg} returns this
 */
proto.protocol.Msg.prototype.clearExtend = function() {
  return jspb.Message.setField(this, 7, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocol.Msg.prototype.hasExtend = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional int32 type = 10;
 * @return {number}
 */
proto.protocol.Msg.prototype.getType = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.protocol.Msg} returns this
 */
proto.protocol.Msg.prototype.setType = function(value) {
  return jspb.Message.setField(this, 10, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.protocol.Msg} returns this
 */
proto.protocol.Msg.prototype.clearType = function() {
  return jspb.Message.setField(this, 10, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocol.Msg.prototype.hasType = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional string content = 15;
 * @return {string}
 */
proto.protocol.Msg.prototype.getContent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 15, ""));
};


/**
 * @param {string} value
 * @return {!proto.protocol.Msg} returns this
 */
proto.protocol.Msg.prototype.setContent = function(value) {
  return jspb.Message.setField(this, 15, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.protocol.Msg} returns this
 */
proto.protocol.Msg.prototype.clearContent = function() {
  return jspb.Message.setField(this, 15, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocol.Msg.prototype.hasContent = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional bytes bytes_content = 20;
 * @return {!(string|Uint8Array)}
 */
proto.protocol.Msg.prototype.getBytesContent = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 20, ""));
};


/**
 * optional bytes bytes_content = 20;
 * This is a type-conversion wrapper around `getBytesContent()`
 * @return {string}
 */
proto.protocol.Msg.prototype.getBytesContent_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getBytesContent()));
};


/**
 * optional bytes bytes_content = 20;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getBytesContent()`
 * @return {!Uint8Array}
 */
proto.protocol.Msg.prototype.getBytesContent_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getBytesContent()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.protocol.Msg} returns this
 */
proto.protocol.Msg.prototype.setBytesContent = function(value) {
  return jspb.Message.setField(this, 20, value);
};


/**
 * Clears the field making it undefined.
 * @return {!proto.protocol.Msg} returns this
 */
proto.protocol.Msg.prototype.clearBytesContent = function() {
  return jspb.Message.setField(this, 20, undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.protocol.Msg.prototype.hasBytesContent = function() {
  return jspb.Message.getField(this, 20) != null;
};


goog.object.extend(exports, proto.protocol);
