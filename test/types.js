import { Typr } from "../src/index.js";

// Basic checks to make sure the declared value actually exists

/**
 * Asserts that the given condition is true.
 * @param {boolean} condition 
 * @param {string} message 
 */
function assert(condition, message) {
    if (!condition) {
        throw new Error(message);
    }
}

/**
 * Asserts that the given value is an object.
 * @param {unknown} obj 
 * @param {string} message 
 */
function assertObject(obj, message) {
    assert(obj !== null && typeof obj === "object", message ?? "Expected object");
}

/**
 * Asserts that the given value is a function.
 * @param {unknown} fn 
 * @param {string} message 
 */
function assertFunction(fn, message) {
    assert(typeof fn === "function", message ?? "Expected function");
}

/**
 * Asserts that the given object is an instance of the specified type.
 * @param {object} obj 
 * @param {new (...args: never[]) => unknown} type 
 * @param {string} message 
 */
function assertInstanceOf(obj, type, message) {
    assert(obj instanceof type, message ?? `Expected instance of ${type.name}`);
}

/**
 * Asserts that two arrays are equal.
 * @param {unknown[]} expected 
 * @param {unknown[]} actual 
 * @param {string} message 
 */
function assertArrayEquals(expected, actual, message) {
    assert(expected.length === actual.length, message ?? "Array lengths do not match");
    for (let i = 0; i < expected.length; i++) {
        assert(expected[i] === actual[i], message ?? "Array elements do not match");
    }
}

/**
 * Asserts that the given object has the specified public properties, not more, not less.
 * @param {object} obj 
 * @param {string[]} properties 
 * @param {string} message
 */
function assertHasPublicProperties(obj, properties, message) {
    const sorted = [...properties].sort();
    const publicProps = Object.keys(obj).filter(x => !x.startsWith("_")).sort();
    const missing = sorted.filter(x => !publicProps.includes(x));
    const extra = publicProps.filter(x => !sorted.includes(x));
    assertArrayEquals(sorted, publicProps, `${message ?? "Object does not have the expected public properties"}. Missing are ${missing.join(", ")}. Extra are ${extra.join(", ")}`);
}

assertObject(Typr, "Typr is not defined");
assertHasPublicProperties(Typr, [
    "parse",
    "B",
    "findTable",
    "U",
    "T",
], "Typr has unexpected exported properties");
assertFunction(Typr.parse, "Typr.parse is not defined");

assertObject(Typr.B, "Typr.B is not defined");
assertHasPublicProperties(Typr.B, [
    "readASCII",
    "readASCIIArray",
    "readBytes",
    "readF2dot14",
    "readFixed",
    "readInt",
    "readInt8",
    "readShort",
    "readUTF8",
    "readUint",
    "readUint64",
    "readUnicode",
    "readUshort",
    "readUshorts",
    "t",
    "writeASCII",
    "writeUint",
    "writeUshort"
], "Typr.B has unexpected exported properties");
assertFunction(Typr.B.readASCII, "Typr.B.readASCII is not a function");
assertFunction(Typr.B.readASCIIArray, "Typr.B.readASCIIArray is not a function");
assertFunction(Typr.B.readBytes, "Typr.B.readBytes is not a function");
assertFunction(Typr.B.readF2dot14, "Typr.B.readF2dot14 is not a function");
assertFunction(Typr.B.readFixed, "Typr.B.readFixed is not a function");
assertFunction(Typr.B.readInt, "Typr.B.readInt is not a function");
assertFunction(Typr.B.readInt8, "Typr.B.readInt8 is not a function");
assertFunction(Typr.B.readShort, "Typr.B.readShort is not a function");
assertFunction(Typr.B.readUTF8, "Typr.B.readUTF8 is not a function");
assertFunction(Typr.B.readUint, "Typr.B.readUint is not a function");
assertFunction(Typr.B.readUint64, "Typr.B.readUint64 is not a function");
assertFunction(Typr.B.readUnicode, "Typr.B.readUnicode is not a function");
assertFunction(Typr.B.readUshort, "Typr.B.readUshort is not a function");
assertFunction(Typr.B.readUshorts, "Typr.B.readUshorts is not a function");
assertFunction(Typr.B.writeASCII, "Typr.B.writeASCII is not a function");
assertFunction(Typr.B.writeUint, "Typr.B.writeUint is not a function");
assertFunction(Typr.B.writeUshort, "Typr.B.writeUshort is not a function");

assertObject(Typr.B.t, "Typr.B.t is not an object");
assertHasPublicProperties(Typr.B.t, [
    "buff",
    "int8",
    "int16",
    "int32",
    "uint8",
    "uint16",
    "uint32"
], "Typr.B.t has unexpected exported properties");
assertInstanceOf(Typr.B.t.buff, ArrayBuffer, "Typr.B.t is not an array buffer");
assertInstanceOf(Typr.B.t.int8, Int8Array, "Typr.B.t is not an int 8 array");
assertInstanceOf(Typr.B.t.int16, Int16Array, "Typr.B.t is not an int 16 array");
assertInstanceOf(Typr.B.t.int32, Int32Array, "Typr.B.t is not an int 32 array");
assertInstanceOf(Typr.B.t.uint8, Uint8Array, "Typr.B.t is not a uint 8 array");
assertInstanceOf(Typr.B.t.uint16, Uint16Array, "Typr.B.t is not a uint 16 array");
assertInstanceOf(Typr.B.t.uint32, Uint32Array, "Typr.B.t is not a uint 32 array");

assertObject(Typr.T, "Typr.T is not defined");
assertObject(Typr.T.CBDT, "Typr.T.CBDT is not defined");
assertFunction(Typr.T.CBDT.parseTab, "Typr.T.CBDT.parseTab is not defined");
assertObject(Typr.T.CBLC, "Typr.T.CBLC is not defined");
assertFunction(Typr.T.CBLC.parseTab, "Typr.T.CBLC.parseTab is not defined");
assertObject(Typr.T.CFF, "Typr.T.CFF is not defined");
assertFunction(Typr.T.CFF.parseTab, "Typr.T.CFF.parseTab is not defined");
assertObject(Typr.T.OS2, "Typr.T.OS2 is not defined");
assertFunction(Typr.T.OS2.parseTab, "Typr.T.OS2.parseTab is not defined");
assertObject(Typr.T.SVG, "Typr.T.SVG is not defined");
assertFunction(Typr.T.SVG.parseTab, "Typr.T.SVG.parseTab is not defined");
assertObject(Typr.T.cmap, "Typr.T.cmap is not defined");
assertFunction(Typr.T.cmap.parseTab, "Typr.T.cmap.parseTab is not defined");
assertObject(Typr.T.colr, "Typr.T.colr is not defined");
assertFunction(Typr.T.colr.parseTab, "Typr.T.colr.parseTab is not defined");
assertObject(Typr.T.cpal, "Typr.T.cpal is not defined");
assertFunction(Typr.T.cpal.parseTab, "Typr.T.cpal.parseTab is not defined");
assertObject(Typr.T.glyf, "Typr.T.glyf is not defined");
assertFunction(Typr.T.glyf.parseTab, "Typr.T.glyf.parseTab is not defined");
assertObject(Typr.T.head, "Typr.T.head is not defined");
assertFunction(Typr.T.head.parseTab, "Typr.T.head.parseTab is not defined");
assertObject(Typr.T.hhea, "Typr.T.hhea is not defined");
assertFunction(Typr.T.hhea.parseTab, "Typr.T.hhea.parseTab is not defined");
assertObject(Typr.T.hmtx, "Typr.T.hmtx is not defined");
assertFunction(Typr.T.hmtx.parseTab, "Typr.T.hmtx.parseTab is not defined");
assertObject(Typr.T.kern, "Typr.T.kern is not defined");
assertFunction(Typr.T.kern.parseTab, "Typr.T.kern.parseTab is not defined");
assertObject(Typr.T.loca, "Typr.T.loca is not defined");
assertFunction(Typr.T.loca.parseTab, "Typr.T.loca.parseTab is not defined");
assertObject(Typr.T.maxp, "Typr.T.maxp is not defined");
assertFunction(Typr.T.maxp.parseTab, "Typr.T.maxp.parseTab is not defined");
assertObject(Typr.T.name, "Typr.T.name is not defined");
assertFunction(Typr.T.name.parseTab, "Typr.T.name.parseTab is not defined");
assertObject(Typr.T.post, "Typr.T.post is not defined");
assertFunction(Typr.T.post.parseTab, "Typr.T.post.parseTab is not defined");
assertObject(Typr.T.sbix, "Typr.T.sbix is not defined");
assertFunction(Typr.T.sbix.parseTab, "Typr.T.sbix.parseTab is not defined");

assertObject(Typr.U, "Typr.U is not defined");
assertHasPublicProperties(Typr.U, [
    "P",
    "SVG",
    "SVGToPath",
    "codeToGlyph",
    "glyphToPath",
    "initHB",
    "pathToContext",
    "pathToSVG",
    "shape",
    "shapeToPath"
], "Typr.U has unexpected exported properties");

assertFunction(Typr.U.codeToGlyph, "Typr.U.codeToGlyph is not defined");
assertFunction(Typr.U.glyphToPath, "Typr.U.glyphToPath is not defined");
assertFunction(Typr.U.initHB, "Typr.U.initHB is not defined");
assertFunction(Typr.U.pathToContext, "Typr.U.pathToContext is not defined");
assertFunction(Typr.U.pathToSVG, "Typr.U.pathToSVG is not defined");
assertFunction(Typr.U.shape, "Typr.U.shape is not defined");
assertFunction(Typr.U.shapeToPath, "Typr.U.shapeToPath is not defined");

assertObject(Typr.U.P, "Typr.U.P is not defined");
assertHasPublicProperties(Typr.U.P, [
    "ClosePath",
    "CurveTo",
    "LineTo",
    "MoveTo",
    "qCurveTo"
], "Typr.U.P has unexpected exported properties");
assertFunction(Typr.U.P.ClosePath, "Typr.U.ClosePath is not defined");
assertFunction(Typr.U.P.CurveTo, "Typr.U.CurveTo is not defined");
assertFunction(Typr.U.P.LineTo, "Typr.U.LineTo is not defined");
assertFunction(Typr.U.P.MoveTo, "Typr.U.MoveTo is not defined");
assertFunction(Typr.U.P.qCurveTo, "Typr.U.qCurveTo is not defined");

assertObject(Typr.U.SVG, "Typr.U.SVG is not defined");
assertHasPublicProperties(Typr.U.SVG, [
    "cssMap",
    "readTrnf",
    "svgToPath",
    "toPath"
], "Typr.U.SVG has unexpected exported properties");
assertFunction(Typr.U.SVG.cssMap, "Typr.U.SVG.cssMap is not defined");
assertFunction(Typr.U.SVG.readTrnf, "Typr.U.SVG.readTrnf is not defined");
assertFunction(Typr.U.SVG.svgToPath, "Typr.U.SVG.svgToPath is not defined");
assertFunction(Typr.U.SVG.toPath, "Typr.U.SVG.toPath is not defined");
assertFunction(Typr.U.SVGToPath, "Typr.U.SVGToPath is not defined");

console.log("All type tests passed");