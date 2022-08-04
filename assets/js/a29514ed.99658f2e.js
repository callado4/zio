"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[5338],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>d});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),c=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=c(e.components);return a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},f=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),f=c(t),d=r,h=f["".concat(s,".").concat(d)]||f[d]||u[d]||i;return t?a.createElement(h,l(l({ref:n},p),{},{components:t})):a.createElement(h,l({ref:n},p))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=f;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var c=2;c<i;c++)l[c]=t[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},77:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var a=t(7462),r=(t(7294),t(3905));const i={id:"error-accumulation",title:"Error Accumulation"},l=void 0,o={unversionedId:"reference/error-management/error-accumulation",id:"reference/error-management/error-accumulation",title:"Error Accumulation",description:"Sequential combinators such as ZIO#zip and ZIO.foreach stop when they reach the first error and return immediately. So their policy on error management is to fail fast.",source:"@site/docs/reference/error-management/error-accumulation.md",sourceDirName:"reference/error-management",slug:"/reference/error-management/error-accumulation",permalink:"/reference/error-management/error-accumulation",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/reference/error-management/error-accumulation.md",tags:[],version:"current",frontMatter:{id:"error-accumulation",title:"Error Accumulation"},sidebar:"reference-sidebar",previous:{title:"6. Sandboxing",permalink:"/reference/error-management/recovering/sandboxing"},next:{title:"Map Operations",permalink:"/reference/error-management/operations/map-operations"}},s={},c=[{value:"<code>ZIO#validate</code>",id:"ziovalidate",level:2},{value:"<code>ZIO.validate</code>",id:"ziovalidate-1",level:2},{value:"<code>ZIO.validateFirst</code>",id:"ziovalidatefirst",level:2},{value:"<code>ZIO.partition</code>",id:"ziopartition",level:2}],p={toc:c};function u(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Sequential combinators such as ",(0,r.kt)("inlineCode",{parentName:"p"},"ZIO#zip")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"ZIO.foreach")," stop when they reach the first error and return immediately. So their policy on error management is to fail fast."),(0,r.kt)("p",null,"In the following example, we can see that the ",(0,r.kt)("inlineCode",{parentName:"p"},"ZIO#zip")," operator will fail as soon as it reaches the first failure. As a result, we only see the first error in the stack trace:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\n\nobject MainApp extends ZIOAppDefault {\n  val f1: ZIO[Any, Nothing, Int] = ZIO.succeed(1)\n  val f2: ZIO[Any, String, Int]  = ZIO.fail("Oh uh!").as(2)\n  val f3: ZIO[Any, Nothing, Int] = ZIO.succeed(3)\n  val f4: ZIO[Any, String, Int]  = ZIO.fail("Oh no!").as(4)\n\n  val myApp: ZIO[Any, String, (Int, Int, Int, Int)] =\n    f1 zip f2 zip f3 zip f4\n\n  def run = myApp.debug\n}\n')),(0,r.kt)("p",null,"There is also the ",(0,r.kt)("inlineCode",{parentName:"p"},"ZIO.foreach")," operator that takes a collection and an effectful operation, then tries to apply the transformation to all elements of the collection. This operator also has the same error management behavior. It fails when it encounters the first error:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\n\nobject MainApp extends ZIOAppDefault {\n  val myApp: ZIO[Any, String, List[Int]] =\n    ZIO.foreach(List(1, 2, 3, 4, 5)) { n =>\n      if (n < 4)\n        ZIO.succeed(n)\n      else\n        ZIO.fail(s"$n is not less that 4")\n    }\n\n  def run = myApp.debug\n}\n')),(0,r.kt)("p",null,"There are some situations when we need to collect all potential errors in a computation rather than failing fast. In this section, we will discuss operators that accumulate errors as well as successes."),(0,r.kt)("h2",{id:"ziovalidate"},(0,r.kt)("inlineCode",{parentName:"h2"},"ZIO#validate")),(0,r.kt)("p",null,"It is similar to the ",(0,r.kt)("inlineCode",{parentName:"p"},"ZIO#zip")," operator, it sequentially zips two ZIO effects together, if both effects fail, it combines their causes with ",(0,r.kt)("inlineCode",{parentName:"p"},"Cause.Then"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"trait ZIO[-R, +E, +A] {\n  def validate[R1 <: R, E1 >: E, B](that: => ZIO[R1, E1, B]): ZIO[R1, E1, (A, B)]\n}\n")),(0,r.kt)("p",null,"If any of effecful operations doesn't fail, it results like the ",(0,r.kt)("inlineCode",{parentName:"p"},"zip")," operator. Otherwise, when it reaches the first error it won't stop, instead, it will continue the zip operation until reach the final effect while combining:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\n\nobject MainApp extends ZIOAppDefault {\n  val f1 = ZIO.succeed(1).debug\n  val f2 = ZIO.succeed(2) *> ZIO.fail("Oh uh!")\n  val f3 = ZIO.succeed(3).debug\n  val f4 = ZIO.succeed(4) *> ZIO.fail("Oh error!")\n  val f5 = ZIO.succeed(5).debug\n\n  val myApp: ZIO[Any, String, (Int, Int, Int)] =\n    f1 validate f2 validate f3 validate f4 validate f5\n\n  def run = myApp.cause.debug.uncause\n}\n')),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"ZIO#validatePar")," operator is similar to the ",(0,r.kt)("inlineCode",{parentName:"p"},"ZIO#validate")," operator zips two effects but in parallel. As this operator doesn't fail fast, unlike the ",(0,r.kt)("inlineCode",{parentName:"p"},"ZIO#zipPar")," if it reaches a failure, it won't interrupt another running effect. If both effects fail, it will combine their causes with ",(0,r.kt)("inlineCode",{parentName:"p"},"Cause.Both"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\n\nobject MainApp extends ZIOAppDefault {\n  val f1 = ZIO.succeed(1).debug\n  val f2 = ZIO.succeed(2) *> ZIO.fail("Oh uh!")\n  val f3 = ZIO.succeed(3).debug\n  val f4 = ZIO.succeed(4) *> ZIO.fail("Oh error!")\n  val f5 = ZIO.succeed(5).debug\n\n  val myApp: ZIO[Any, String, ((((Int, Int), Int), Int), Int)] =\n    f1 validatePar f2 validatePar f3 validatePar f4 validatePar f5\n\n  def run = myApp.cause.map(_.untraced).debug.uncause\n}\n')),(0,r.kt)("p",null,"In addition, it has a ",(0,r.kt)("inlineCode",{parentName:"p"},"ZIO#validateWith")," variant, which is useful for providing combiner function (",(0,r.kt)("inlineCode",{parentName:"p"},"f: (A, B) => C"),") to combine pair values."),(0,r.kt)("h2",{id:"ziovalidate-1"},(0,r.kt)("inlineCode",{parentName:"h2"},"ZIO.validate")),(0,r.kt)("p",null,"This operator is very similar to the ",(0,r.kt)("inlineCode",{parentName:"p"},"ZIO.foreach")," operator. It transforms all elements of a collection using the provided effectful operation, but it collects all errors in the error channel, as well as the success values in the success channel."),(0,r.kt)("p",null,"It is similar to the ",(0,r.kt)("inlineCode",{parentName:"p"},"ZIO.partition")," but it is an exceptional operator which means it collects errors in the error channel and success in the success channel:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"object ZIO {\n  def validate[R, E, A, B](in: Collection[A])(\n    f: A => ZIO[R, E, B]\n  ): ZIO[R, ::[E], Collection[B]]\n\n  def validate[R, E, A, B](in: NonEmptyChunk[A])(\n    f: A => ZIO[R, E, B]\n  ): ZIO[R, ::[E], NonEmptyChunk[B]]\n}\n")),(0,r.kt)("p",null,"Another difference is that this operator is lossy, which means if there are errors all successes will be lost."),(0,r.kt)("p",null,"In the lossy scenario, it will collect all errors in the error channel, which cause the failure:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\n\nobject MainApp extends ZIOAppDefault {\n  val res: ZIO[Any, ::[String], List[Int]] =\n    ZIO.validate(List.range(1, 7)){ n =>\n      if (n < 5)\n        ZIO.succeed(n)\n      else\n        ZIO.fail(s"$n is not less that 5")\n    }\n  def run = res.debug\n}\n')),(0,r.kt)("p",null,"In the success scenario when we have no errors at all, all the successes will be collected in the success channel:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\n\nobject MainApp extends ZIOAppDefault {\n  val res: ZIO[Any, ::[String], List[Int]] =\n    ZIO.validate(List.range(1, 4)){ n =>\n      if (n < 5)\n        ZIO.succeed(n)\n      else\n        ZIO.fail(s"$n is not less that 5")\n    }\n  def run = res.debug\n}\n')),(0,r.kt)("p",null,"Two more notes:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"ZIO.validate")," operator is sequential, so we can use the ",(0,r.kt)("inlineCode",{parentName:"li"},"ZIO.validatePar")," version to do the computation in parallel."),(0,r.kt)("li",{parentName:"ol"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"ZIO.validateDiscard")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"ZIO.validateParDiscard")," operators are mostly similar to their non-discard versions, except they discard the successes. So the type of the success channel will be ",(0,r.kt)("inlineCode",{parentName:"li"},"Unit"),".")),(0,r.kt)("h2",{id:"ziovalidatefirst"},(0,r.kt)("inlineCode",{parentName:"h2"},"ZIO.validateFirst")),(0,r.kt)("p",null,"Like the ",(0,r.kt)("inlineCode",{parentName:"p"},"ZIO.validate")," in the success scenario, it will collect all errors in the error channel except in the success scenario it will return only the first success:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"object ZIO {\n  def validateFirst[R, E, A, B](in: Collection[A])(\n    f: A => ZIO[R, E, B]\n  ): ZIO[R, Collection[E], B]\n}\n")),(0,r.kt)("p",null,"In the failure scenario, it will collect all errors in the failure channel, and it causes the failure:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\n\nobject MainApp extends ZIOAppDefault {\n  val res: ZIO[Any, List[String], Int] =\n    ZIO.validateFirst(List.range(5, 10)) { n =>\n      if (n < 5)\n        ZIO.succeed(n)\n      else\n        ZIO.fail(s"$n is not less that 5")\n    }\n  def run = res.debug\n}\n')),(0,r.kt)("p",null,"In the success scenario it will return the first success value:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\n\nobject MainApp extends ZIOAppDefault {\n  val res: ZIO[Any, List[String], Int] =\n    ZIO.validateFirst(List.range(1, 4)) { n =>\n      if (n < 5)\n        ZIO.succeed(n)\n      else\n        ZIO.fail(s"$n is not less that 5")\n    }\n  def run = res.debug\n}\n')),(0,r.kt)("h2",{id:"ziopartition"},(0,r.kt)("inlineCode",{parentName:"h2"},"ZIO.partition")),(0,r.kt)("p",null,"The partition operator takes an iterable and effectful function that transforms each value of the iterable and finally creates a tuple of both failures and successes in the success channel."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"object ZIO {\n  def partition[R, E, A, B](in: => Iterable[A])(\n    f: A => ZIO[R, E, B]\n  ): ZIO[R, Nothing, (Iterable[E], Iterable[B])]\n}\n")),(0,r.kt)("p",null,"Note that this operator is an unexceptional effect, which means the type of the error channel is ",(0,r.kt)("inlineCode",{parentName:"p"},"Nothing"),". So using this operator, if we reach a failure case, the whole effect doesn't fail. This is similar to the ",(0,r.kt)("inlineCode",{parentName:"p"},"List#partition")," in the standard library:"),(0,r.kt)("p",null,"Let's try an example of collecting even numbers from the range of 0 to 7:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'import zio._\n\nval res: ZIO[Any, Nothing, (Iterable[String], Iterable[Int])] =\n  ZIO.partition(List.range(0, 7)){ n =>\n    if (n % 2 == 0)\n      ZIO.succeed(n)\n    else\n      ZIO.fail(s"$n is not even")\n  }\nres.debug\n')))}u.isMDXComponent=!0}}]);