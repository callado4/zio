"use strict";(self.webpackChunkzio_site=self.webpackChunkzio_site||[]).push([[36582],{15680:(e,n,a)=>{a.d(n,{xA:()=>c,yg:()=>f});var t=a(96540);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function i(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function o(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?i(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function l(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=t.createContext({}),s=function(e){var n=t.useContext(p),a=n;return e&&(a="function"==typeof e?e(n):o(o({},n),e)),a},c=function(e){var n=s(e.components);return t.createElement(p.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(a),m=r,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||i;return a?t.createElement(f,o(o({ref:n},c),{},{components:a})):t.createElement(f,o({ref:n},c))}));function f(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=m;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[d]="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return t.createElement.apply(null,o)}return t.createElement.apply(null,a)}m.displayName="MDXCreateElement"},10037:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var t=a(58168),r=(a(96540),a(15680));const i={id:"ref",title:"Ref"},o=void 0,l={unversionedId:"reference/concurrency/ref",id:"reference/concurrency/ref",title:"Ref",description:"Ref[A] models a mutable reference to a value of type A in which we can store immutable data. The two basic operations are set, which fills the Ref with a new value, and get, which retrieves its current content.",source:"@site/docs/reference/concurrency/ref.md",sourceDirName:"reference/concurrency",slug:"/reference/concurrency/ref",permalink:"/reference/concurrency/ref",draft:!1,editUrl:"https://github.com/zio/zio/edit/series/2.x/docs/reference/concurrency/ref.md",tags:[],version:"current",frontMatter:{id:"ref",title:"Ref"},sidebar:"reference-sidebar",previous:{title:"Introduction to Concurrent Programming in ZIO",permalink:"/reference/concurrency/"},next:{title:"Ref.Synchronized",permalink:"/reference/concurrency/refsynchronized"}},p={},s=[{value:"Concurrent Stateful Application",id:"concurrent-stateful-application",level:2},{value:"Operations",id:"operations",level:2},{value:"make",id:"make",level:3},{value:"get",id:"get",level:3},{value:"set",id:"set",level:3},{value:"update",id:"update",level:3},{value:"modify",id:"modify",level:3},{value:"AtomicReference in Java",id:"atomicreference-in-java",level:2},{value:"Ref vs. State Monad",id:"ref-vs-state-monad",level:2},{value:"Concurrency",id:"concurrency",level:3},{value:"Error Handling",id:"error-handling",level:3},{value:"State Transformers",id:"state-transformers",level:2},{value:"Building more sophisticated concurrency primitives",id:"building-more-sophisticated-concurrency-primitives",level:2}],c={toc:s},d="wrapper";function u(e){let{components:n,...a}=e;return(0,r.yg)(d,(0,t.A)({},c,a,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"Ref[A]")," models a ",(0,r.yg)("strong",{parentName:"p"},"mutable reference")," to a value of type ",(0,r.yg)("inlineCode",{parentName:"p"},"A")," in which we can store ",(0,r.yg)("strong",{parentName:"p"},"immutable")," data. The two basic operations are ",(0,r.yg)("inlineCode",{parentName:"p"},"set"),", which fills the ",(0,r.yg)("inlineCode",{parentName:"p"},"Ref")," with a new value, and ",(0,r.yg)("inlineCode",{parentName:"p"},"get"),", which retrieves its current content."),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"Ref")," provides us a way to functionally manage in-memory state. All operations on ",(0,r.yg)("inlineCode",{parentName:"p"},"Ref")," are atomic and thread-safe, giving us a reliable foundation for synchronizing concurrent programs."),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"Ref"),":"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"is purely functional and referentially transparent"),(0,r.yg)("li",{parentName:"ul"},"is concurrent-safe and lock-free"),(0,r.yg)("li",{parentName:"ul"},"updates and modifies atomically")),(0,r.yg)("h2",{id:"concurrent-stateful-application"},"Concurrent Stateful Application"),(0,r.yg)("p",null,(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("inlineCode",{parentName:"strong"},"Ref")," is the foundation for writing concurrent stateful applications"),". Anytime we need to share information between multiple fibers, and those fibers have to update the same information, they need to communicate through something that provides the guarantee of atomicity. Because ",(0,r.yg)("inlineCode",{parentName:"p"},"Ref")," is ",(0,r.yg)("strong",{parentName:"p"},"concurrent-safe"),", we can share the same ",(0,r.yg)("inlineCode",{parentName:"p"},"Ref")," among many fibers. All of which can update ",(0,r.yg)("inlineCode",{parentName:"p"},"Ref")," concurrently, removing the worry of race conditions. Even if we had ten thousand fibers all updating the same ",(0,r.yg)("inlineCode",{parentName:"p"},"Ref"),", as long as they are using atomic update and modify functions, we will have zero race conditions."),(0,r.yg)("h2",{id:"operations"},"Operations"),(0,r.yg)("p",null,"Though ",(0,r.yg)("inlineCode",{parentName:"p"},"Ref")," has many operations, here we will introduce the most common and important ones."),(0,r.yg)("h3",{id:"make"},"make"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"Ref")," is never empty, it always contains something. We can create a ",(0,r.yg)("inlineCode",{parentName:"p"},"Ref")," by providing the initial value to its ",(0,r.yg)("inlineCode",{parentName:"p"},"make")," method, a constructor of the ",(0,r.yg)("inlineCode",{parentName:"p"},"Ref")," data type. We should pass an ",(0,r.yg)("strong",{parentName:"p"},"immutable value")," of type ",(0,r.yg)("inlineCode",{parentName:"p"},"A")," to the constructor, and it returns an ",(0,r.yg)("inlineCode",{parentName:"p"},"UIO[Ref[A]]")," value:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},"def make[A](a: A): UIO[Ref[A]]\n")),(0,r.yg)("p",null,"As we can see, the output is wrapped in",(0,r.yg)("inlineCode",{parentName:"p"},"UIO"),", which means creating a ",(0,r.yg)("inlineCode",{parentName:"p"},"Ref")," is effectful. Whenever we ",(0,r.yg)("inlineCode",{parentName:"p"},"make"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"update"),", or ",(0,r.yg)("inlineCode",{parentName:"p"},"modify")," the ",(0,r.yg)("inlineCode",{parentName:"p"},"Ref"),", we are performing an effectful operation."),(0,r.yg)("p",null,"Let's create some ",(0,r.yg)("inlineCode",{parentName:"p"},"Ref"),"s from immutable values:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},'val counterRef = Ref.make(0)\n// counterRef: UIO[Ref[Int]] = Sync(\n//   trace = "repl.MdocSession.MdocApp.counterRef(ref.md:14)",\n//   eval = zio.Ref$$$Lambda$19081/0x00007f6f4312e9a8@18f1a89d\n// )\nval stringRef = Ref.make("initial") \n// stringRef: UIO[Ref[String]] = Sync(\n//   trace = "repl.MdocSession.MdocApp.stringRef(ref.md:17)",\n//   eval = zio.Ref$$$Lambda$19081/0x00007f6f4312e9a8@43a098d1\n// )\n\nsealed trait State\ncase object Active  extends State\ncase object Changed extends State\ncase object Closed  extends State\n\nval stateRef = Ref.make(Active) \n// stateRef: UIO[Ref[Active.type]] = Sync(\n//   trace = "repl.MdocSession.MdocApp.stateRef(ref.md:32)",\n//   eval = zio.Ref$$$Lambda$19081/0x00007f6f4312e9a8@1cbf54c5\n// )\n')),(0,r.yg)("blockquote",null,(0,r.yg)("p",{parentName:"blockquote"},(0,r.yg)("em",{parentName:"p"},(0,r.yg)("strong",{parentName:"em"},"Warning")),":  "),(0,r.yg)("p",{parentName:"blockquote"},"A big mistake when creating a ",(0,r.yg)("inlineCode",{parentName:"p"},"Ref")," is trying to store mutable data inside it. A",(0,r.yg)("inlineCode",{parentName:"p"},"Ref")," must be used with ",(0,r.yg)("strong",{parentName:"p"},"immutable data"),". Otherwise, we lose our atomic guarantees, which can lead to collisions and race conditions. ")),(0,r.yg)("p",null,"The following snippet compiles, but it leads to race conditions due to a mutable variable being provided to ",(0,r.yg)("inlineCode",{parentName:"p"},"make"),":"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},'// Compiles but don\'t work properly\nvar init = 0\n// init: Int = 0\nval counterRef = Ref.make(init)\n// counterRef: UIO[Ref[Int]] = Sync(\n//   trace = "repl.MdocSession.MdocApp.<local MdocApp>.counterRef(ref.md:42)",\n//   eval = zio.Ref$$$Lambda$19081/0x00007f6f4312e9a8@692314a7\n// )\n')),(0,r.yg)("p",null,"To correct this, we should change the ",(0,r.yg)("inlineCode",{parentName:"p"},"init")," to be immutable:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},'val init = 0\n// init: Int = 0\nval counterRef = Ref.make(init)\n// counterRef: UIO[Ref[Int]] = Sync(\n//   trace = "repl.MdocSession.MdocApp.<local MdocApp>.counterRef(ref.md:52)",\n//   eval = zio.Ref$$$Lambda$19081/0x00007f6f4312e9a8@6c2e2f\n// )\n')),(0,r.yg)("h3",{id:"get"},"get"),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"get")," method returns the current value of the reference. Its return type is ",(0,r.yg)("inlineCode",{parentName:"p"},"IO[EB, B]")," in which ",(0,r.yg)("inlineCode",{parentName:"p"},"B")," is the value type of the effect and in the failure case, ",(0,r.yg)("inlineCode",{parentName:"p"},"EB")," is the error type of that effect."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},"def get: IO[EB, B]\n")),(0,r.yg)("p",null,"As the ",(0,r.yg)("inlineCode",{parentName:"p"},"make")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"get")," methods of ",(0,r.yg)("inlineCode",{parentName:"p"},"Ref")," are effectful, we can chain them together with ",(0,r.yg)("inlineCode",{parentName:"p"},"flatMap"),". In the following example, we create a ",(0,r.yg)("inlineCode",{parentName:"p"},"Ref")," with ",(0,r.yg)("inlineCode",{parentName:"p"},"initial")," value, and then we acquire the current state with the ",(0,r.yg)("inlineCode",{parentName:"p"},"get")," method:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},'Ref.make("initial")\n   .flatMap(_.get)\n   .flatMap(current => Console.printLine(s"current value of ref: $current"))\n')),(0,r.yg)("p",null,"We can refactor this to use a for-comprehension rather than a series of ",(0,r.yg)("inlineCode",{parentName:"p"},"flatMap"),"s to increase readability:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},'for {\n  ref   <- Ref.make("initial")\n  value <- ref.get\n} yield assert(value == "initial")\n')),(0,r.yg)("p",null,"Note that, there is no way to access the shared state outside the monadic operations."),(0,r.yg)("h3",{id:"set"},"set"),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"set")," method atomically writes a new value to the ",(0,r.yg)("inlineCode",{parentName:"p"},"Ref"),"."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},'for {\n  ref   <- Ref.make("initial")\n  _     <- ref.set("update")\n  value <- ref.get\n} yield assert(value == "update")\n')),(0,r.yg)("h3",{id:"update"},"update"),(0,r.yg)("p",null,"With ",(0,r.yg)("inlineCode",{parentName:"p"},"update"),", we can atomically update the state of ",(0,r.yg)("inlineCode",{parentName:"p"},"Ref")," with a given ",(0,r.yg)("strong",{parentName:"p"},"pure")," function, that is, it needs to be deterministic and free of side effects."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},"def update(f: A => A): IO[E, Unit]\n")),(0,r.yg)("p",null,"Assume we have a counter, we can increase its value with the ",(0,r.yg)("inlineCode",{parentName:"p"},"update")," method:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},"val counterInitial = 0\nfor {\n  counterRef <- Ref.make(counterInitial)\n  _          <- counterRef.update(_ + 1)\n  value <- counterRef.get\n} yield assert(value == 1)\n")),(0,r.yg)("admonition",{type:"caution"},(0,r.yg)("p",{parentName:"admonition"},(0,r.yg)("inlineCode",{parentName:"p"},"update")," is not the composition of ",(0,r.yg)("inlineCode",{parentName:"p"},"get")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"set"),". This composition is not concurrent-safe. Whenever we need to update our state, we should use the ",(0,r.yg)("inlineCode",{parentName:"p"},"update")," operation which modifies its ",(0,r.yg)("inlineCode",{parentName:"p"},"Ref")," atomically. ")),(0,r.yg)("p",null,"For example, the following snippet is not concurrent-safe:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},'// Unsafe State Management\nobject UnsafeCountRequests extends ZIOAppDefault {\n\n  def request(counter: Ref[Int]) = for {\n    current <- counter.get\n    _ <- counter.set(current + 1)\n  } yield ()\n\n  private val initial = 0\n  private val myApp =\n    for {\n      ref <- Ref.make(initial)\n      _ <- request(ref) zipPar request(ref)\n      rn <- ref.get\n      _ <- Console.printLine(s"total requests performed: $rn")\n    } yield ()\n\n  def run = myApp\n}\n')),(0,r.yg)("p",null,"The above snippet doesn't behave deterministically. This program sometimes prints ",(0,r.yg)("inlineCode",{parentName:"p"},"2")," and sometimes prints ",(0,r.yg)("inlineCode",{parentName:"p"},"1"),". We can fix it by using ",(0,r.yg)("inlineCode",{parentName:"p"},"update"),":"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},'// Safe State Management\nobject CountRequests extends ZIOAppDefault {\n\n  def request(counter: Ref[Int]): ZIO[Any, Nothing, Unit] = {\n    for {\n      _ <- counter.update(_ + 1)\n      reqNumber <- counter.get\n      _ <- Console.printLine(s"request number: $reqNumber").orDie\n    } yield ()\n  }\n\n  private val initial = 0\n  private val myApp =\n    for {\n      ref <- Ref.make(initial)\n      _ <- request(ref) zipPar request(ref)\n      rn <- ref.get\n      _ <- Console.printLine(s"total requests performed: $rn").orDie\n    } yield ()\n\n  def run = myApp\n}\n')),(0,r.yg)("p",null,"Here is another use case of ",(0,r.yg)("inlineCode",{parentName:"p"},"update")," to write a ",(0,r.yg)("inlineCode",{parentName:"p"},"repeat")," combinator:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},"def repeat[E, A](n: Int)(io: IO[E, A]): IO[E, Unit] =\n  Ref.make(0).flatMap { iRef =>\n    def loop: IO[E, Unit] = iRef.get.flatMap { i =>\n      if (i < n)\n        io *> iRef.update(_ + 1) *> loop\n      else\n        ZIO.unit\n    }\n    loop\n  }\n")),(0,r.yg)("h3",{id:"modify"},"modify"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"modify")," is a more powerful version of ",(0,r.yg)("inlineCode",{parentName:"p"},"update"),". It atomically modifies ",(0,r.yg)("inlineCode",{parentName:"p"},"Ref")," by the given function, and also computes a return value. The function that we pass to ",(0,r.yg)("inlineCode",{parentName:"p"},"modify")," needs to be a pure function; it needs to be deterministic and free of side effects."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},"def modify[B](f: A => (B, A)): IO[E, B]\n")),(0,r.yg)("p",null,"Remember the ",(0,r.yg)("inlineCode",{parentName:"p"},"CountRequest")," example. What if we want to log the number of each request inside the ",(0,r.yg)("inlineCode",{parentName:"p"},"request")," function? Let's see what happens if we write that function with the composition of ",(0,r.yg)("inlineCode",{parentName:"p"},"update")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"get")," methods:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},'// Unsafe in Concurrent Environment\ndef request(counter: Ref[Int]) = {\n  for {\n    _  <- counter.update(_ + 1)\n    rn <- counter.get\n    _  <- Console.printLine(s"request number received: $rn")\n  } yield ()\n}\n')),(0,r.yg)("p",null,"What happens if, between running ",(0,r.yg)("inlineCode",{parentName:"p"},"update")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"get"),", a second ",(0,r.yg)("inlineCode",{parentName:"p"},"update")," occurs on another fiber? This would not behave deterministically in concurrent environments. So we need a way to perform a combination of ",(0,r.yg)("strong",{parentName:"p"},"get, set, get")," atomically. This is where ",(0,r.yg)("inlineCode",{parentName:"p"},"modify")," comes in. Here we will edit ",(0,r.yg)("inlineCode",{parentName:"p"},"request")," to use ",(0,r.yg)("inlineCode",{parentName:"p"},"modify"),":"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},'// Safe in Concurrent Environment\ndef request(counter: Ref[Int]) = {\n  for {\n    rn <- counter.modify(c => (c + 1, c + 1))\n    _  <- Console.printLine(s"request number received: $rn")\n  } yield ()\n}\n')),(0,r.yg)("h2",{id:"atomicreference-in-java"},"AtomicReference in Java"),(0,r.yg)("p",null,"For Java programmers, we can think of ",(0,r.yg)("inlineCode",{parentName:"p"},"Ref")," as an ",(0,r.yg)("inlineCode",{parentName:"p"},"AtomicReference"),". Java has a ",(0,r.yg)("inlineCode",{parentName:"p"},"java.util.concurrent.atomic")," package which contains ",(0,r.yg)("inlineCode",{parentName:"p"},"AtomicReference"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"AtomicLong"),", ",(0,r.yg)("inlineCode",{parentName:"p"},"AtomicBoolean")," and so forth. ",(0,r.yg)("inlineCode",{parentName:"p"},"Ref")," has roughly the same power, guarantees, and limitations as ",(0,r.yg)("inlineCode",{parentName:"p"},"AtomicReference"),", but is higher-level and ZIO-friendly. "),(0,r.yg)("h2",{id:"ref-vs-state-monad"},"Ref vs. State Monad"),(0,r.yg)("p",null,"Basically ",(0,r.yg)("inlineCode",{parentName:"p"},"Ref")," allows us to have all the power of State Monad inside ZIO. State Monad lacks two important features that we use in real-life application development:"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},"Concurrency Support"),(0,r.yg)("li",{parentName:"ol"},"Error Handling")),(0,r.yg)("h3",{id:"concurrency"},"Concurrency"),(0,r.yg)("p",null,"State Monad is an effect system that only includes state. It allows us to do pure stateful computations. We can only get, set, and update (and related computations) state. State Monad updates its state with series of stateful computations sequentially, but ",(0,r.yg)("strong",{parentName:"p"},"it can't be used to do async or concurrent computations"),". ",(0,r.yg)("inlineCode",{parentName:"p"},"Ref"),", in contrast, has great support for concurrent and async programming."),(0,r.yg)("h3",{id:"error-handling"},"Error Handling"),(0,r.yg)("p",null,"In most real-life,stateful applications, we will involve some database IO and API calls and/or some concurrent and sync operations which can fail in different ways along the path of execution. So besides state management, we need a way to handle errors. The State Monad doesn't have the ability to model error management. We can combine State Monad and Either Monad with StateT monad transformer, but it imposes massive performance overhead. It doesn't buy us anything that we can't do with ",(0,r.yg)("inlineCode",{parentName:"p"},"Ref"),". So it is an anti-pattern. In the ZIO model, errors are encoded in effects and ",(0,r.yg)("inlineCode",{parentName:"p"},"Ref")," utilizes that. So, in addition to state management, we have the ability to handle errors without additional work."),(0,r.yg)("h2",{id:"state-transformers"},"State Transformers"),(0,r.yg)("p",null,"Those who live on the dark side of mutation sometimes have it easy; they can add state everywhere like it's Christmas. Behold:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},'var idCounter = 0\ndef freshVar: String = {\n  idCounter += 1\n  s"var${idCounter}"\n}\nval v1 = freshVar\nval v2 = freshVar\nval v3 = freshVar\n')),(0,r.yg)("p",null,"As functional programmers, we know better and have captured state mutation in the form of functions of type ",(0,r.yg)("inlineCode",{parentName:"p"},"S => (A, S)"),". ",(0,r.yg)("inlineCode",{parentName:"p"},"Ref")," provides such an encoding, with ",(0,r.yg)("inlineCode",{parentName:"p"},"S")," being the type of the value, and ",(0,r.yg)("inlineCode",{parentName:"p"},"modify")," embodying the state mutation function."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},'Ref.make(0).flatMap { idCounter =>\n  def freshVar: UIO[String] =\n    idCounter.modify(cpt => (s"var${cpt + 1}", cpt + 1))\n\n  for {\n    v1 <- freshVar\n    v2 <- freshVar\n    v3 <- freshVar\n  } yield ()\n}\n')),(0,r.yg)("h2",{id:"building-more-sophisticated-concurrency-primitives"},"Building more sophisticated concurrency primitives"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"Ref")," is low-level enough that it can serve as the foundation for other concurrency data types."),(0,r.yg)("p",null,"For example, semaphores are a classic abstract data type for controlling access to shared resources. They are defined as a triplet ",(0,r.yg)("inlineCode",{parentName:"p"},"S = (v, P, V)")," where ",(0,r.yg)("inlineCode",{parentName:"p"},"v")," is the number of units of the resource that are currently available, and ",(0,r.yg)("inlineCode",{parentName:"p"},"P")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"V")," are operations that decrement and increment ",(0,r.yg)("inlineCode",{parentName:"p"},"v"),", respectively. ",(0,r.yg)("inlineCode",{parentName:"p"},"P")," will only complete when ",(0,r.yg)("inlineCode",{parentName:"p"},"v")," is non-negative and must wait if it isn't."),(0,r.yg)("p",null,"With ",(0,r.yg)("inlineCode",{parentName:"p"},"Ref"),", it's easy to implement such a semaphore! The only difficulty is in ",(0,r.yg)("inlineCode",{parentName:"p"},"P"),", where we must fail and retry when either ",(0,r.yg)("inlineCode",{parentName:"p"},"v")," is negative, or its value has changed between the moment we read it and the moment we try to update it. A naive implementation could look like:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},"sealed trait S {\n  def P: UIO[Unit]\n  def V: UIO[Unit]\n}\n\nobject S {\n  def apply(v: Long): UIO[S] =\n    Ref.make(v).map { vref =>\n      new S {\n        def V = vref.update(_ + 1).unit\n\n        def P = (vref.get.flatMap { v =>\n          if (v < 0)\n            ZIO.fail(())\n          else\n            vref.modify(v0 => if (v0 == v) (true, v - 1) else (false, v)).flatMap {\n              case false => ZIO.fail(())\n              case true  => ZIO.unit\n            }\n        } <> P).unit\n      }\n    }\n}\n")),(0,r.yg)("p",null,"Let's rock these crocodile boots we found the other day at the market and test our semaphore at the night club, yee-haw:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-scala"},'import zio.Console._\n\nval party = for {\n  dancefloor <- S(10)\n  dancers <- ZIO.foreachPar(1 to 100) { i =>\n    dancefloor.P *> Random.nextDouble.map(d => Duration.fromNanos((d * 1000000).round)).flatMap { d =>\n      printLine(s"${i} checking my boots") *> ZIO.sleep(d) *> printLine(s"${i} dancing like it\'s 99")\n    } *> dancefloor.V\n  }\n} yield ()\n')),(0,r.yg)("p",null,"It goes without saying you should take a look at ZIO's own ",(0,r.yg)("inlineCode",{parentName:"p"},"Semaphore"),", it does all this and more without wasting all those CPU cycles while waiting."))}u.isMDXComponent=!0}}]);