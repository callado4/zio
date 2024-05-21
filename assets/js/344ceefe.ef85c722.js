"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[77900],{15680:(e,n,a)=>{a.d(n,{xA:()=>c,yg:()=>h});var o=a(96540);function t(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function r(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,o)}return a}function i(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?r(Object(a),!0).forEach((function(n){t(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function s(e,n){if(null==e)return{};var a,o,t=function(e,n){if(null==e)return{};var a,o,t={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],n.indexOf(a)>=0||(t[a]=e[a]);return t}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var l=o.createContext({}),p=function(e){var n=o.useContext(l),a=n;return e&&(a="function"==typeof e?e(n):i(i({},n),e)),a},c=function(e){var n=p(e.components);return o.createElement(l.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},g=o.forwardRef((function(e,n){var a=e.components,t=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(a),g=t,h=d["".concat(l,".").concat(g)]||d[g]||u[g]||r;return a?o.createElement(h,i(i({ref:n},c),{},{components:a})):o.createElement(h,i({ref:n},c))}));function h(e,n){var a=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var r=a.length,i=new Array(r);i[0]=g;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[d]="string"==typeof e?e:t,i[1]=s;for(var p=2;p<r;p++)i[p]=a[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,a)}g.displayName="MDXCreateElement"},68073:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var o=a(58168),t=(a(96540),a(15680));const r={id:"scope",title:"Scope"},i=void 0,s={unversionedId:"reference/resource/scope",id:"reference/resource/scope",title:"Scope",description:"The Scope data type is the foundation of safe and composable resources handling in ZIO.",source:"@site/docs/reference/resource/scope.md",sourceDirName:"reference/resource",slug:"/reference/resource/scope",permalink:"/reference/resource/scope",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/reference/resource/scope.md",tags:[],version:"current",frontMatter:{id:"scope",title:"Scope"},sidebar:"reference-sidebar",previous:{title:"Introduction to Resource Management in ZIO",permalink:"/reference/resource/"},next:{title:"ZPool",permalink:"/reference/resource/zpool"}},l={},p=[{value:"Scopes and The ZIO Environment",id:"scopes-and-the-zio-environment",level:2},{value:"Scopes are Dynamic",id:"scopes-are-dynamic",level:2},{value:"Defining Resources",id:"defining-resources",level:2},{value:"Converting Resources Into Other ZIO Data Types",id:"converting-resources-into-other-zio-data-types",level:2},{value:"Controlling Finalizer Ordering",id:"controlling-finalizer-ordering",level:2},{value:"Advanced Scope Operators",id:"advanced-scope-operators",level:2},{value:"Using a Scope",id:"using-a-scope",level:3},{value:"Extending a Scope",id:"extending-a-scope",level:3},{value:"Closing a Scope",id:"closing-a-scope",level:3}],c={toc:p},d="wrapper";function u(e){let{components:n,...a}=e;return(0,t.yg)(d,(0,o.A)({},c,a,{components:n,mdxType:"MDXLayout"}),(0,t.yg)("p",null,"The ",(0,t.yg)("inlineCode",{parentName:"p"},"Scope")," data type is the foundation of safe and composable resources handling in ZIO."),(0,t.yg)("p",null,"Conceptually, a scope represents the lifetime of one or more resources. The resources can be used in the scope and are guaranteed to be released when the scope is closed."),(0,t.yg)("p",null,"The ",(0,t.yg)("inlineCode",{parentName:"p"},"Scope")," data type takes this idea and represents it as a first class value."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-scala"},"import zio._\n\ntrait Scope {\n  def addFinalizerExit(finalizer: Exit[Any, Any] => UIO[Any]): UIO[Unit]\n  def close(exit: => Exit[Any, Any]): UIO[Unit]\n}\n\nobject Scope {\n  def make: UIO[Scope] = ???\n}\n")),(0,t.yg)("p",null,"The ",(0,t.yg)("inlineCode",{parentName:"p"},"addFinalizerExit")," operator lets us add a finalizer to the ",(0,t.yg)("inlineCode",{parentName:"p"},"Scope"),". Based on the ",(0,t.yg)("inlineCode",{parentName:"p"},"Exit")," value that the ",(0,t.yg)("inlineCode",{parentName:"p"},"Scope")," is closed with, the finalizer will be run. The finalizer is guaranteed to be run when the scope is closed. The ",(0,t.yg)("inlineCode",{parentName:"p"},"close")," operator closes the scope, running all the finalizers that have been added to the scope. It takes an ",(0,t.yg)("inlineCode",{parentName:"p"},"Exit")," value and runs the finalizers based on that value."),(0,t.yg)("p",null,"In the following example, we create a ",(0,t.yg)("inlineCode",{parentName:"p"},"Scope"),", add a finalizer to it, and then close the scope:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-scala"},'import zio._\n\nfor {\n  scope <- Scope.make\n  _ <- ZIO.debug("Scope is created!")\n  _ <- scope.addFinalizer(\n    for {\n      _ <- ZIO.debug("The finalizer is started!")\n      _ <- ZIO.sleep(5.seconds)\n      _ <- ZIO.debug("The finalizer is done!")\n    } yield ()\n  )\n  _ <- ZIO.debug("Leaving scope!")\n  _ <- scope.close(Exit.succeed(()))\n  _ <- ZIO.debug("Scope is closed!")\n} yield ()\n')),(0,t.yg)("p",null,"The output of this program will be:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},"Scope is created!\nLeaving scope!\nThe finalizer is started!\nThe finalizer is done!\nScope is closed!\n")),(0,t.yg)("p",null,"We can see that the finalizer is run after we called ",(0,t.yg)("inlineCode",{parentName:"p"},"close")," on the scope. So the finalizer is guaranteed to be run when the scope is closed."),(0,t.yg)("p",null,"The ",(0,t.yg)("inlineCode",{parentName:"p"},"Scope#extend")," operator, takes a ",(0,t.yg)("inlineCode",{parentName:"p"},"ZIO")," effect that requires a ",(0,t.yg)("inlineCode",{parentName:"p"},"Scope")," and provides it with a ",(0,t.yg)("inlineCode",{parentName:"p"},"Scope")," without closing it afterwards. This allows us to extend the lifetime of a scoped resource to the lifetime of a scope."),(0,t.yg)("h2",{id:"scopes-and-the-zio-environment"},"Scopes and The ZIO Environment"),(0,t.yg)("p",null,"In combination with the ZIO environment, ",(0,t.yg)("inlineCode",{parentName:"p"},"Scope")," gives us an extremely powerful way to manage resources."),(0,t.yg)("p",null,"We can define a resource using operators such as ",(0,t.yg)("inlineCode",{parentName:"p"},"ZIO.acquireRelease"),", which lets us construct a scoped value from an ",(0,t.yg)("inlineCode",{parentName:"p"},"acquire")," and ",(0,t.yg)("inlineCode",{parentName:"p"},"release")," workflow. For example, here is how we might define a simple resource:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-scala"},"import zio._\n\nimport java.io.IOException\nimport scala.io._\n\ndef acquire(name: => String): ZIO[Any, IOException, Source] =\n  ZIO.attemptBlockingIO(Source.fromFile(name))\n\ndef release(source: => Source): ZIO[Any, Nothing, Unit] =\n  ZIO.succeedBlocking(source.close())\n\ndef source(name: => String): ZIO[Scope, IOException, Source] =\n  ZIO.acquireRelease(acquire(name))(release(_))\n")),(0,t.yg)("p",null,"Notice that the ",(0,t.yg)("inlineCode",{parentName:"p"},"acquireRelease")," operator added a ",(0,t.yg)("inlineCode",{parentName:"p"},"Scope")," to the environment required by the workflow. This indicates that this workflow needs a ",(0,t.yg)("inlineCode",{parentName:"p"},"Scope")," to be run and will add a finalizer that will close the resource when the scope is closed."),(0,t.yg)("p",null,"We can continue working with the resource as long as we want by using ",(0,t.yg)("inlineCode",{parentName:"p"},"flatMap")," or other ",(0,t.yg)("inlineCode",{parentName:"p"},"ZIO")," operators. For example, here is how we might read the contents of a file:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-scala"},'source("cool.txt").flatMap { source =>\n  ZIO.attemptBlockingIO(source.getLines())\n}\n// res2: ZIO[Scope, IOException, Iterator[String]] = FlatMap(\n//   trace = "repl.MdocSession.MdocApp.res2(scope.md:85)",\n//   first = FlatMap(\n//     trace = "repl.MdocSession.MdocApp.source(scope.md:79)",\n//     first = Sync(\n//       trace = "repl.MdocSession.MdocApp.source(scope.md:79)",\n//       eval = zio.ZIO$$$Lambda$18858/0x00007f1592de02c0@7c0ca2b5\n//     ),\n//     successK = zio.ZIO$$$Lambda$18258/0x00007f1591af02d8@1e1d73cd\n//   ),\n//   successK = <function1>\n// )\n')),(0,t.yg)("p",null,"Once we are finished working with the file, we can close the scope using the ",(0,t.yg)("inlineCode",{parentName:"p"},"ZIO.scoped")," operator. This function creates a new ",(0,t.yg)("inlineCode",{parentName:"p"},"Scope"),", provides it to the workflow, and closes the ",(0,t.yg)("inlineCode",{parentName:"p"},"Scope")," once the workflow is complete:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-scala"},"object ZIO {\n  def scoped[R, E, A](zio: ZIO[Scope with R, E, A]): ZIO[R, E, A] = ???\n}\n")),(0,t.yg)("p",null,"The ",(0,t.yg)("inlineCode",{parentName:"p"},"scoped")," operator removes the ",(0,t.yg)("inlineCode",{parentName:"p"},"Scope")," from the environment, indicating that there are no longer any resources used by this workflow that require a scope. We now have a workflow that is ready to run:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-scala"},"def contents(name: => String): ZIO[Any, IOException, Chunk[String]] =\n  ZIO.scoped {\n    source(name).flatMap { source =>\n      ZIO.attemptBlockingIO(Chunk.fromIterator(source.getLines()))\n    }\n  }\n")),(0,t.yg)("p",null,"In some cases ZIO applications may provide a ",(0,t.yg)("inlineCode",{parentName:"p"},"Scope")," for us for resources that we don't specify a scope for. For example ",(0,t.yg)("inlineCode",{parentName:"p"},"ZIOApp")," provides a ",(0,t.yg)("inlineCode",{parentName:"p"},"Scope")," for our entire application and ZIO Test provides a ",(0,t.yg)("inlineCode",{parentName:"p"},"Scope")," for each test."),(0,t.yg)("admonition",{type:"note"},(0,t.yg)("p",{parentName:"admonition"},"Please note that like any other services that we can obtain from the ZIO environment, we can do the same with ",(0,t.yg)("inlineCode",{parentName:"p"},"Scope"),". By calling ",(0,t.yg)("inlineCode",{parentName:"p"},"ZIO.service[Scope]")," we can obtain the ",(0,t.yg)("inlineCode",{parentName:"p"},"Scope")," service and then use it to manage resources by adding finalizers to it:"),(0,t.yg)("pre",{parentName:"admonition"},(0,t.yg)("code",{parentName:"pre",className:"language-scala"},'import zio._\n\nval resourcefulApp: ZIO[Scope, Nothing, Unit] =\n  for {\n    scope <- ZIO.service[Scope]\n    _     <- ZIO.debug("Entering the scope!")\n    _ <- scope.addFinalizer(\n      for {\n        _ <- ZIO.debug("The finalizer is started!")\n        _ <- ZIO.sleep(5.seconds)\n        _ <- ZIO.debug("The finalizer is done!")\n      } yield ()\n    )\n    _ <- ZIO.debug("Leaving scope!")\n  } yield ()\n')),(0,t.yg)("p",{parentName:"admonition"},"Then we can run the ",(0,t.yg)("inlineCode",{parentName:"p"},"app")," workflow by providing the ",(0,t.yg)("inlineCode",{parentName:"p"},"Scope")," service to it:"),(0,t.yg)("pre",{parentName:"admonition"},(0,t.yg)("code",{parentName:"pre",className:"language-scala"},"val finalApp: ZIO[Any, Nothing, Unit] =\n  Scope.make.flatMap(scope => resourcefulApp.provide(ZLayer.succeed(scope)).onExit(scope.close(_)))\n")),(0,t.yg)("p",{parentName:"admonition"},"Here is the output of the program:"),(0,t.yg)("pre",{parentName:"admonition"},(0,t.yg)("code",{parentName:"pre"},"Entering the scope!\nLeaving scope!\nThe finalizer is started!\nThe finalizer is done!\n")),(0,t.yg)("p",{parentName:"admonition"},"So we can think of ",(0,t.yg)("inlineCode",{parentName:"p"},"Scope")," as a service that helps us manage resources effectfully. However, the way we utilized it in the previous example is not as per the best practices, and it was only for educational purposes."),(0,t.yg)("p",{parentName:"admonition"},"In real-world applications, we can easily manage resources by utilizing high-level operators such as ",(0,t.yg)("inlineCode",{parentName:"p"},"ZIO.acquireRelease")," and ",(0,t.yg)("inlineCode",{parentName:"p"},"ZIO.scoped"),".")),(0,t.yg)("h2",{id:"scopes-are-dynamic"},"Scopes are Dynamic"),(0,t.yg)("p",null,"One important thing to note about ",(0,t.yg)("inlineCode",{parentName:"p"},"Scope")," is that they are dynamic. This means that if we have an effect that requires a ",(0,t.yg)("inlineCode",{parentName:"p"},"Scope")," we can ",(0,t.yg)("inlineCode",{parentName:"p"},"flatMap")," over that effect and use its value to create a new effect. The new effect extends the lifetime of the original scope. So as we don't close the scope (by calling ",(0,t.yg)("inlineCode",{parentName:"p"},"ZIO.scoped"),") the resources will not be released, and they can become bigger and bigger until we close them:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-scala"},'ZIO.scoped {\n  file("path/to/file.txt").flatMap(getLines).flatMap(processLines) \n}\n')),(0,t.yg)("h2",{id:"defining-resources"},"Defining Resources"),(0,t.yg)("p",null,"We have already seen the ",(0,t.yg)("inlineCode",{parentName:"p"},"acquireRelease")," operator, which is one of the most fundamental operators for creating scoped resources."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-scala"},"object ZIO {\n  def acquireRelease[R, E, A](acquire: => ZIO[R, E, A])(release: A => ZIO[R, Nothing, Any]): ZIO[R with Scope, E, A] =\n    ???\n}\n")),(0,t.yg)("p",null,"The ",(0,t.yg)("inlineCode",{parentName:"p"},"acquireRelease")," operator performs the ",(0,t.yg)("inlineCode",{parentName:"p"},"acquire")," workflow uninterruptibly. This is important because if we allowed interruption during resource acquisition we could be interrupted when the resource was partially acquired."),(0,t.yg)("p",null,"The guarantee of the ",(0,t.yg)("inlineCode",{parentName:"p"},"acquireRelease")," operator is that if the ",(0,t.yg)("inlineCode",{parentName:"p"},"acquire")," workflow successfully completes execution then the ",(0,t.yg)("inlineCode",{parentName:"p"},"release")," workflow is guaranteed to be run when the ",(0,t.yg)("inlineCode",{parentName:"p"},"Scope")," is closed."),(0,t.yg)("p",null,"In addition to the ",(0,t.yg)("inlineCode",{parentName:"p"},"acquireRelease")," operator, there is a more powerful variant called ",(0,t.yg)("inlineCode",{parentName:"p"},"acquireReleaseExit")," that lets the finalizer depend on the ",(0,t.yg)("inlineCode",{parentName:"p"},"Exit")," value that the ",(0,t.yg)("inlineCode",{parentName:"p"},"Scope")," is closed with. This can be useful if we want to run a different finalizer depending on whether the ",(0,t.yg)("inlineCode",{parentName:"p"},"Scope")," was closed with a success or a failure."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-scala"},"object ZIO {\n  def acquireReleaseExit[R, E, A](acquire: => ZIO[R, E, A])(release: (A, Exit[Any, Any]) => ZIO[R, Nothing, Any]): ZIO[R with Scope, E, A] =\n    ???\n}\n")),(0,t.yg)("p",null,"There is also another family of operators to be aware of that allow the ",(0,t.yg)("inlineCode",{parentName:"p"},"acquire")," workflow to be interrupted."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-scala"},"object ZIO {\n  def acquireReleaseInterruptible[R, E, A](acquire: => ZIO[R, E, A])(release: ZIO[R, Nothing, Any]): ZIO[R with Scope, E, A] =\n    ???\n  def acquireReleaseInterruptibleExit[R, E, A](acquire: => ZIO[R, E, A])(release: Exit[Any, Any] => ZIO[R, Nothing, Any]): ZIO[R with Scope, E, A] =\n    ???\n}\n")),(0,t.yg)("p",null,"In this case the ",(0,t.yg)("inlineCode",{parentName:"p"},"release")," workflow is not allowed to depend on the resource, since the ",(0,t.yg)("inlineCode",{parentName:"p"},"acquire")," workflow might be interrupted after partially acquiring the resource. The ",(0,t.yg)("inlineCode",{parentName:"p"},"release")," workflow is responsible for independently determining what finalization is required, for example by inspecting in-memory state."),(0,t.yg)("p",null,"This is a more advanced variant so we should generally use the standard ",(0,t.yg)("inlineCode",{parentName:"p"},"acquireRelease")," operator. However, the ",(0,t.yg)("inlineCode",{parentName:"p"},"acquireReleaseInterruptible")," operator can be very useful to describe more advanced resource acquisition scenarios where part of the acquisition can be interruptible."),(0,t.yg)("h2",{id:"converting-resources-into-other-zio-data-types"},"Converting Resources Into Other ZIO Data Types"),(0,t.yg)("p",null,"We will commonly want to convert scoped resources into other ZIO data types, particularly ",(0,t.yg)("inlineCode",{parentName:"p"},"ZLayer")," for dependency injection and ",(0,t.yg)("inlineCode",{parentName:"p"},"ZStream"),", ",(0,t.yg)("inlineCode",{parentName:"p"},"ZSink"),", and ",(0,t.yg)("inlineCode",{parentName:"p"},"ZChannel")," for streaming."),(0,t.yg)("p",null,"We can easily do this using the ",(0,t.yg)("inlineCode",{parentName:"p"},"scoped")," constructor on each of these data types. For example, here is how we might convert the ",(0,t.yg)("inlineCode",{parentName:"p"},"source")," resource above into a ",(0,t.yg)("inlineCode",{parentName:"p"},"ZStream")," of the contents:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-scala"},"import zio.stream._\n\ndef lines(name: => String): ZStream[Any, IOException, String] =\n  ZStream.scoped(source(name)).flatMap { source =>\n    ZStream.fromIteratorSucceed(source.getLines())\n  }\n")),(0,t.yg)("p",null,"Just like the ",(0,t.yg)("inlineCode",{parentName:"p"},"scoped")," operator on ",(0,t.yg)("inlineCode",{parentName:"p"},"ZIO"),", the ",(0,t.yg)("inlineCode",{parentName:"p"},"scoped")," operator on ",(0,t.yg)("inlineCode",{parentName:"p"},"ZStream")," removes the ",(0,t.yg)("inlineCode",{parentName:"p"},"Scope")," from the environment, indicating that there are no longer any resources used by this workflow which require a scope."),(0,t.yg)("p",null,"The lifetime of these resources will now be governed by the lifetime of the stream, which generally means that the resources will be released as soon as we are done pulling from the stream. This lets the lifetime of these resources be managed by various stream operators to release those resources as efficiently as possible, for example releasing resources associated with each stream as soon as we are done with that stream when we merge two streams."),(0,t.yg)("p",null,"Similarly, we can convert a scoped resource into a ",(0,t.yg)("inlineCode",{parentName:"p"},"ZLayer")," by using the ",(0,t.yg)("inlineCode",{parentName:"p"},"scoped")," constructor on ",(0,t.yg)("inlineCode",{parentName:"p"},"ZLayer"),":"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-scala"},"def sourceLayer(name: => String): ZLayer[Any, IOException, Source] =\n  ZLayer.scoped(source(name))\n")),(0,t.yg)("p",null,"Again, the ",(0,t.yg)("inlineCode",{parentName:"p"},"Scope")," has been removed from the environment, indicating that the lifetime of this resource will no longer be governed by the ",(0,t.yg)("inlineCode",{parentName:"p"},"Scope")," but by the lifetime of the layer. In this case, that means the resource will be released as soon as the workflow that the layer is provided to completes execution, whether by success, failure, or interruption."),(0,t.yg)("p",null,"We should generally use the ",(0,t.yg)("inlineCode",{parentName:"p"},"scoped")," operators on other ZIO data types to convert a scoped resource into a value of that data type. Having the lifetime of resources governed by the lifetime of those data types makes our code simpler and easier to reason about."),(0,t.yg)("h2",{id:"controlling-finalizer-ordering"},"Controlling Finalizer Ordering"),(0,t.yg)("p",null,"By default, when a ",(0,t.yg)("inlineCode",{parentName:"p"},"Scope")," is closed all finalizers added to that ",(0,t.yg)("inlineCode",{parentName:"p"},"Scope")," will be closed in the reverse of the order in which those finalizers were added to the ",(0,t.yg)("inlineCode",{parentName:"p"},"Scope"),"."),(0,t.yg)("p",null,"Releasing resources in the reverse order in which they were acquired makes sense because a resource that was acquired first may be necessary for a later acquired resource to be closed."),(0,t.yg)("p",null,"For example, if we open a network connection and then open a file on a remote server we need to close the file before closing the network connection. Otherwise we would no longer be able to interact with the remote server to close the file!"),(0,t.yg)("p",null,"Therefore, in most cases we don't have to do anything with regard to order of finalizers. However, in some cases we may want to run finalizers in parallel instead of sequentially, for example when the resources were also acquired in parallel."),(0,t.yg)("p",null,"For this we can use the ",(0,t.yg)("inlineCode",{parentName:"p"},"ZIO.parallelFinalizers")," operator to indicate that finalizers should be run in parallel instead of sequentially when a scope is closed. Here is how we could use it to implement an operator that acquires and releases two resources in parallel."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-scala"},"def zipScoped[R <: Scope, E, A, B](\n  left: ZIO[R, E, A],\n  right: ZIO[R, E, B]\n): ZIO[R, E, (A, B)] =\n  ZIO.parallelFinalizers(left.zipPar(right))\n")),(0,t.yg)("p",null,"The ",(0,t.yg)("inlineCode",{parentName:"p"},"zipPar")," operator on ",(0,t.yg)("inlineCode",{parentName:"p"},"ZIO")," takes care of acquiring the resources in parallel and the ",(0,t.yg)("inlineCode",{parentName:"p"},"parallelFinalizers")," operator handles releasing them in parallel. This makes it easy for us to do parallel resource acquisition by leveraging the powerful concurrency operators that already exist on ",(0,t.yg)("inlineCode",{parentName:"p"},"ZIO"),"."),(0,t.yg)("h2",{id:"advanced-scope-operators"},"Advanced Scope Operators"),(0,t.yg)("p",null,"So far we have seen that while ",(0,t.yg)("inlineCode",{parentName:"p"},"Scope")," is the foundation of safe and composable resource handling in ZIO, we don't actually need to work with the ",(0,t.yg)("inlineCode",{parentName:"p"},"Scope")," data type directly other than being able to inpect the type signature to see if a workflow is scoped."),(0,t.yg)("p",null,"In most cases we just use the ",(0,t.yg)("inlineCode",{parentName:"p"},"acquireRelease")," constructor or one of its variants to construct our resource and either work with the resource and close its scope using ",(0,t.yg)("inlineCode",{parentName:"p"},"ZIO.scoped")," or convert the resource into another ZIO data type using an operator such as ",(0,t.yg)("inlineCode",{parentName:"p"},"ZStream.scoped")," or ",(0,t.yg)("inlineCode",{parentName:"p"},"ZLayer.scoped"),". However, for more advanced use cases we may need to work with scopes directly and ",(0,t.yg)("inlineCode",{parentName:"p"},"Scope")," has several useful operators for helping us do so."),(0,t.yg)("h3",{id:"using-a-scope"},"Using a Scope"),(0,t.yg)("p",null,"First, we can ",(0,t.yg)("inlineCode",{parentName:"p"},"use")," a ",(0,t.yg)("inlineCode",{parentName:"p"},"Scope")," by providing it to a workflow that needs a ",(0,t.yg)("inlineCode",{parentName:"p"},"Scope")," and closing the ",(0,t.yg)("inlineCode",{parentName:"p"},"Scope")," immediately after. This is analogous to the ",(0,t.yg)("inlineCode",{parentName:"p"},"ZIO.scoped")," operator:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-scala"},"trait Closeable extends Scope {\n  def use[R, E, A](zio: => ZIO[R with Scope, E, A]): ZIO[R, E, A]\n}\n\nobject ZIO {\n  def scoped[R, E, A](zio: => ZIO[R with Scope, E, A]): ZIO[R, E, A] = ???\n}\n")),(0,t.yg)("p",null,"In the following example, we obtained a ",(0,t.yg)("inlineCode",{parentName:"p"},"Scope")," and added a finalizer to it, and then extended its lifetime to the lifetime of the ",(0,t.yg)("inlineCode",{parentName:"p"},"resource1")," and ",(0,t.yg)("inlineCode",{parentName:"p"},"resource2"),":"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-scala"},'import zio._\n\nobject ExtendingScopesExample extends ZIOAppDefault {\n  val resource1: ZIO[Scope, Nothing, Unit] =\n    ZIO.acquireRelease(ZIO.debug("Acquiring the resource 1"))(_ =>\n      ZIO.debug("Releasing the resource one") *> ZIO.sleep(5.seconds)\n    )\n  val resource2: ZIO[Scope, Nothing, Unit] =\n    ZIO.acquireRelease(ZIO.debug("Acquiring the resource 2"))(_ =>\n      ZIO.debug("Releasing the resource two") *> ZIO.sleep(3.seconds)\n    )\n\n  def run =\n    ZIO.scoped(\n      for {\n        scope <- ZIO.scope\n        _     <- ZIO.debug("Entering the main scope!")\n        _     <- scope.addFinalizer(ZIO.debug("Releasing the main resource!") *> ZIO.sleep(2.seconds))\n        _     <- scope.extend(resource1)\n        _     <- scope.extend(resource2)\n        _     <- ZIO.debug("Leaving scope!")\n      } yield ()\n    )\n\n}\n')),(0,t.yg)("p",null,"output:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre"},"Entering the main scope!\nAcquiring the resource 1\nAcquiring the resource 2\nLeaving scope!\nReleasing the resource two\nReleasing the resource one\nReleasing the main resource!\n")),(0,t.yg)("h3",{id:"extending-a-scope"},"Extending a Scope"),(0,t.yg)("p",null,"Second, we can use the ",(0,t.yg)("inlineCode",{parentName:"p"},"extend")," operator on ",(0,t.yg)("inlineCode",{parentName:"p"},"Scope"),' to provide a workflow with a scope without closing it afterwards. This allows us to extend the lifetime of a scoped resource to the lifetime of a scope, effectively allowing us to "extend" the lifetime of that resource:'),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-scala"},"trait Scope {\n  def extend[R, E, A](zio: => ZIO[Scope with R, E, A]): ZIO[R, E, A]\n}\n")),(0,t.yg)("h3",{id:"closing-a-scope"},"Closing a Scope"),(0,t.yg)("p",null,"Third, we can ",(0,t.yg)("inlineCode",{parentName:"p"},"close")," a ",(0,t.yg)("inlineCode",{parentName:"p"},"Scope"),". One thing to note here is that by default only the creator of a ",(0,t.yg)("inlineCode",{parentName:"p"},"Scope")," can close it:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-scala"},"trait Closeable extends Scope {\n  def close(exit: => Exit[Any, Any]): UIO[Unit]\n}\n")),(0,t.yg)("p",null,"Creating a new ",(0,t.yg)("inlineCode",{parentName:"p"},"Scope")," returns a ",(0,t.yg)("inlineCode",{parentName:"p"},"Scope.Closeable")," which can be closed. Normally users of a ",(0,t.yg)("inlineCode",{parentName:"p"},"Scope")," will only be provided with a ",(0,t.yg)("inlineCode",{parentName:"p"},"Scope")," which does not expose a ",(0,t.yg)("inlineCode",{parentName:"p"},"close")," operator."),(0,t.yg)("p",null,"This way the creator of a ",(0,t.yg)("inlineCode",{parentName:"p"},"Scope"),' can be sure that someone else will not "pull the rug out from under them" by closing the scope prematurely.'))}u.isMDXComponent=!0}}]);