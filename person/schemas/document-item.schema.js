var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
// src/person/schemas/document-item.schema.ts
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
let DocumentItem = (() => {
    let _classDecorators = [Schema()];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _type_decorators;
    let _type_initializers = [];
    let _type_extraInitializers = [];
    let _description_decorators;
    let _description_initializers = [];
    let _description_extraInitializers = [];
    let _createdDate_decorators;
    let _createdDate_initializers = [];
    let _createdDate_extraInitializers = [];
    let _certificateName_decorators;
    let _certificateName_initializers = [];
    let _certificateName_extraInitializers = [];
    let _certificateProvider_decorators;
    let _certificateProvider_initializers = [];
    let _certificateProvider_extraInitializers = [];
    let _validUntil_decorators;
    let _validUntil_initializers = [];
    let _validUntil_extraInitializers = [];
    let _registrationNumber_decorators;
    let _registrationNumber_initializers = [];
    let _registrationNumber_extraInitializers = [];
    let _files_decorators;
    let _files_initializers = [];
    let _files_extraInitializers = [];
    var DocumentItem = _classThis = class {
        constructor() {
            this.type = __runInitializers(this, _type_initializers, void 0);
            this.description = (__runInitializers(this, _type_extraInitializers), __runInitializers(this, _description_initializers, void 0));
            this.createdDate = (__runInitializers(this, _description_extraInitializers), __runInitializers(this, _createdDate_initializers, void 0));
            this.certificateName = (__runInitializers(this, _createdDate_extraInitializers), __runInitializers(this, _certificateName_initializers, void 0));
            this.certificateProvider = (__runInitializers(this, _certificateName_extraInitializers), __runInitializers(this, _certificateProvider_initializers, void 0));
            this.validUntil = (__runInitializers(this, _certificateProvider_extraInitializers), __runInitializers(this, _validUntil_initializers, void 0));
            this.registrationNumber = (__runInitializers(this, _validUntil_extraInitializers), __runInitializers(this, _registrationNumber_initializers, void 0));
            this.files = (__runInitializers(this, _registrationNumber_extraInitializers), __runInitializers(this, _files_initializers, void 0));
            __runInitializers(this, _files_extraInitializers);
        }
    };
    __setFunctionName(_classThis, "DocumentItem");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _type_decorators = [Prop({ required: true, enum: ['hospitalDoc', 'generalDoc', 'certificate', 'business'] })];
        _description_decorators = [Prop({ required: true })];
        _createdDate_decorators = [Prop()];
        _certificateName_decorators = [Prop()];
        _certificateProvider_decorators = [Prop()];
        _validUntil_decorators = [Prop()];
        _registrationNumber_decorators = [Prop()];
        _files_decorators = [Prop([String])];
        __esDecorate(null, null, _type_decorators, { kind: "field", name: "type", static: false, private: false, access: { has: obj => "type" in obj, get: obj => obj.type, set: (obj, value) => { obj.type = value; } }, metadata: _metadata }, _type_initializers, _type_extraInitializers);
        __esDecorate(null, null, _description_decorators, { kind: "field", name: "description", static: false, private: false, access: { has: obj => "description" in obj, get: obj => obj.description, set: (obj, value) => { obj.description = value; } }, metadata: _metadata }, _description_initializers, _description_extraInitializers);
        __esDecorate(null, null, _createdDate_decorators, { kind: "field", name: "createdDate", static: false, private: false, access: { has: obj => "createdDate" in obj, get: obj => obj.createdDate, set: (obj, value) => { obj.createdDate = value; } }, metadata: _metadata }, _createdDate_initializers, _createdDate_extraInitializers);
        __esDecorate(null, null, _certificateName_decorators, { kind: "field", name: "certificateName", static: false, private: false, access: { has: obj => "certificateName" in obj, get: obj => obj.certificateName, set: (obj, value) => { obj.certificateName = value; } }, metadata: _metadata }, _certificateName_initializers, _certificateName_extraInitializers);
        __esDecorate(null, null, _certificateProvider_decorators, { kind: "field", name: "certificateProvider", static: false, private: false, access: { has: obj => "certificateProvider" in obj, get: obj => obj.certificateProvider, set: (obj, value) => { obj.certificateProvider = value; } }, metadata: _metadata }, _certificateProvider_initializers, _certificateProvider_extraInitializers);
        __esDecorate(null, null, _validUntil_decorators, { kind: "field", name: "validUntil", static: false, private: false, access: { has: obj => "validUntil" in obj, get: obj => obj.validUntil, set: (obj, value) => { obj.validUntil = value; } }, metadata: _metadata }, _validUntil_initializers, _validUntil_extraInitializers);
        __esDecorate(null, null, _registrationNumber_decorators, { kind: "field", name: "registrationNumber", static: false, private: false, access: { has: obj => "registrationNumber" in obj, get: obj => obj.registrationNumber, set: (obj, value) => { obj.registrationNumber = value; } }, metadata: _metadata }, _registrationNumber_initializers, _registrationNumber_extraInitializers);
        __esDecorate(null, null, _files_decorators, { kind: "field", name: "files", static: false, private: false, access: { has: obj => "files" in obj, get: obj => obj.files, set: (obj, value) => { obj.files = value; } }, metadata: _metadata }, _files_initializers, _files_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        DocumentItem = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return DocumentItem = _classThis;
})();
export { DocumentItem };
export const DocumentItemSchema = SchemaFactory.createForClass(DocumentItem);
