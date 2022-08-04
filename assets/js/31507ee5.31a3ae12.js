"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[7226],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=p(n),f=r,h=m["".concat(l,".").concat(f)]||m[f]||d[f]||i;return n?a.createElement(h,o(o({ref:t},s),{},{components:n})):a.createElement(h,o({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3089:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const i={id:"defects",title:"Defects"},o=void 0,c={unversionedId:"reference/error-management/types/defects",id:"reference/error-management/types/defects",title:"Defects",description:"By providing a Throwable value to the ZIO.die constructor, we can describe a dying effect:",source:"@site/docs/reference/error-management/types/defects.md",sourceDirName:"reference/error-management/types",slug:"/reference/error-management/types/defects",permalink:"/reference/error-management/types/defects",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/reference/error-management/types/defects.md",tags:[],version:"current",frontMatter:{id:"defects",title:"Defects"},sidebar:"reference-sidebar",previous:{title:"Failures",permalink:"/reference/error-management/types/failures"},next:{title:"Fatal Errors",permalink:"/reference/error-management/types/fatals"}},l={},p=[],s={toc:p};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"By providing a ",(0,r.kt)("inlineCode",{parentName:"p"},"Throwable")," value to the ",(0,r.kt)("inlineCode",{parentName:"p"},"ZIO.die")," constructor, we can describe a dying effect:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"object ZIO {\n  def die(t: => Throwable): ZIO[Any, Nothing, Nothing]\n}\n")),(0,r.kt)("p",null,"Here is an example of such effect, which will die because of encountering ",(0,r.kt)("em",{parentName:"p"},"divide by zero")," defect:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\n\nval dyingEffect: ZIO[Any, Nothing, Nothing] =\n  ZIO.die(new ArithmeticException("divide by zero"))\n')),(0,r.kt)("p",null,"The result is the creation of a ZIO effect whose error channel and success channel are both ",(0,r.kt)("inlineCode",{parentName:"p"},"Nothing"),". In other words, this effect cannot fail and does not produce anything. Instead, it is an effect describing a ",(0,r.kt)("em",{parentName:"p"},"defect")," or an ",(0,r.kt)("em",{parentName:"p"},"unexpected error"),"."),(0,r.kt)("p",null,"Let's see what happens if we run this effect:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\n\nobject MainApp extends ZIOAppDefault {\n  def run = ZIO.die(new ArithmeticException("divide by zero"))\n}\n')),(0,r.kt)("p",null,"If we run this effect, ZIO runtime will print the stack trace that belongs to this defect. So, here is the output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'timestamp=2022-02-16T13:02:44.057191215Z level=ERROR thread=#zio-fiber-0 message="Exception in thread "zio-fiber-2" java.lang.ArithmeticException: divide by zero\n    at MainApp$.$anonfun$run$1(MainApp.scala:4)\n    at zio.ZIO$.$anonfun$die$1(ZIO.scala:3384)\n    at zio.internal.FiberContext.runUntil(FiberContext.scala:255)\n    at zio.internal.FiberContext.run(FiberContext.scala:115)\n    at zio.internal.ZScheduler$$anon$1.run(ZScheduler.scala:151)\n    at <empty>.MainApp.run(MainApp.scala:4)"\n')),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"ZIO.die")," constructor is used to manually describe a dying effect because of a defect inside the code."),(0,r.kt)("p",null,"For example, assume we want to write a ",(0,r.kt)("inlineCode",{parentName:"p"},"divide")," function that takes two numbers and divides the first number by the second. We know that the ",(0,r.kt)("inlineCode",{parentName:"p"},"divide")," function is not defined for zero dominators. Therefore, we should signal an error if division by zero occurs."),(0,r.kt)("p",null,"We have two choices to implement this function using the ZIO effect:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"We can divide the first number by the second, and if the second number was zero, we can fail the effect using ",(0,r.kt)("inlineCode",{parentName:"li"},"ZIO.fail")," with the ",(0,r.kt)("inlineCode",{parentName:"li"},"ArithmeticException")," failure value:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\n\ndef divide(a: Int, b: Int): ZIO[Any, ArithmeticException, Int] =\n  if (b == 0)\n    ZIO.fail(new ArithmeticException("divide by zero"))\n  else\n    ZIO.succeed(a / b)\n')),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"We can divide the first number by the second. In the case of zero for the second number, we use ",(0,r.kt)("inlineCode",{parentName:"li"},"ZIO.die")," to kill the effect by sending a signal of ",(0,r.kt)("inlineCode",{parentName:"li"},"ArithmeticException")," as a defect:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\n\ndef divide(a: Int, b: Int): ZIO[Any, Nothing, Int] =\n  if (b == 0)\n    ZIO.die(new ArithmeticException("divide by zero")) // Unexpected error\n  else\n    ZIO.succeed(a / b)\n')),(0,r.kt)("p",null,"So what is the difference between these two approaches? Let's compare the function signature:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"def divide(a: Int, b: Int): ZIO[Any, ArithmeticException, Int]   // using ZIO.fail\ndef divide(a: Int, b: Int): ZIO[Any, Nothing,             Int]   // using ZIO.die\n")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The first approach, models the ",(0,r.kt)("em",{parentName:"li"},"divide by zero")," error by ",(0,r.kt)("em",{parentName:"li"},"failing")," the effect. We call these failures ",(0,r.kt)("em",{parentName:"li"},"expected errors")," or ",(0,r.kt)("em",{parentName:"li"},"typed error"),"."),(0,r.kt)("li",{parentName:"ol"},"While the second approach models the ",(0,r.kt)("em",{parentName:"li"},"divide by zero")," error by ",(0,r.kt)("em",{parentName:"li"},"dying")," the effect. We call these kinds of errors ",(0,r.kt)("em",{parentName:"li"},"unexpected errors"),", ",(0,r.kt)("em",{parentName:"li"},"defects")," or ",(0,r.kt)("em",{parentName:"li"},"untyped errors"),".")),(0,r.kt)("p",null,"We use the first method when we are handling errors as we expect them, and thus we know how to handle them. In contrast, the second method is used when we aren't expecting those errors in our domain, and we don't know how to handle them. Therefore, we use the ",(0,r.kt)("em",{parentName:"p"},"let it crash")," philosophy."),(0,r.kt)("p",null,"In the second approach, we can see that the ",(0,r.kt)("inlineCode",{parentName:"p"},"divide")," function indicates that it cannot fail because it's error channel is ",(0,r.kt)("inlineCode",{parentName:"p"},"Nothing"),". However, it doesn't mean that this function hasn't any defects. ZIO defects are not typed, so they cannot be seen in type parameters."),(0,r.kt)("p",null,"Note that to create an effect that will die, we shouldn't throw an exception inside the ",(0,r.kt)("inlineCode",{parentName:"p"},"ZIO.die")," constructor, although it works. Instead, the idiomatic way of creating a dying effect is to provide a ",(0,r.kt)("inlineCode",{parentName:"p"},"Throwable")," value into the ",(0,r.kt)("inlineCode",{parentName:"p"},"ZIO.die")," constructor:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\n\nval defect1 = ZIO.die(new ArithmeticException("divide by zero"))       // recommended       // recommended\nval defect2 = ZIO.die(throw new ArithmeticException("divide by zero")) // not recommended\n')),(0,r.kt)("p",null,"Also, if we import a code that may throw an exception, all the exceptions will be translated to the ZIO defect:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\n\nval defect3 = ZIO.succeed(throw new Exception("boom!"))\n')),(0,r.kt)("p",null,"Therefore, in the second approach of the ",(0,r.kt)("inlineCode",{parentName:"p"},"divide")," function, we do not require to manually die the effect in case of the ",(0,r.kt)("em",{parentName:"p"},"dividing by zero"),", because the JVM itself throws an ",(0,r.kt)("inlineCode",{parentName:"p"},"ArithmeticException")," when the denominator is zero."),(0,r.kt)("p",null,"When we import any code into the ",(0,r.kt)("inlineCode",{parentName:"p"},"ZIO")," effect, any exception is thrown inside that code will be translated to ",(0,r.kt)("em",{parentName:"p"},"ZIO defects")," by default. So the following program is the same as the previous example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"import zio._\n\ndef divide(a: Int, b: Int): ZIO[Any, Nothing, Int] =\n  ZIO.succeed(a / b)\n")),(0,r.kt)("p",null,"Another important note is that if we ",(0,r.kt)("inlineCode",{parentName:"p"},"map"),"/",(0,r.kt)("inlineCode",{parentName:"p"},"flatMap")," a ZIO effect and then accidentally throw an exception inside the map operation, that exception will be translated to a ZIO defect:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\n\nval defect4 = ZIO.succeed(???).map(_ => throw new Exception("Boom!"))\nval defect5 = ZIO.attempt(???).map(_ => throw new Exception("Boom!"))\n')))}d.isMDXComponent=!0}}]);