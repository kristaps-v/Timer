import{s as i,a}from"./sha256-DD5Bo9l2.js";import"./index-4gRmbCxX.js";/*!
 * Copyright (c) Microsoft Corporation and contributors. All rights reserved.
 * Licensed under the MIT License.
 */async function c(e,s="SHA-1",t="hex"){let n;switch(s){case"SHA-1":{n=new i;break}case"SHA-256":{n=new a;break}}return n.update(e).digest(t)}async function h(e){const t=`blob ${e.byteLength.toString()}\0`;return new i().update(t).update(e).digest("hex")}export{h as gitHashFile,c as hashFile};
