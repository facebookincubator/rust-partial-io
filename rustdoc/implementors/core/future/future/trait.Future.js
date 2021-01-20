(function() {var implementors = {};
implementors["futures_channel"] = [{"text":"impl&lt;T, '_&gt; Future for Cancellation&lt;'_, T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; Future for Receiver&lt;T&gt;","synthetic":false,"types":[]}];
implementors["futures_task"] = [{"text":"impl&lt;T, '_&gt; Future for LocalFutureObj&lt;'_, T&gt;","synthetic":false,"types":[]},{"text":"impl&lt;T, '_&gt; Future for FutureObj&lt;'_, T&gt;","synthetic":false,"types":[]}];
implementors["tokio"] = [{"text":"impl&lt;S:&nbsp;?Sized, '_&gt; Future for Seek&lt;'_, S&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: AsyncSeek + Unpin,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;R:&nbsp;?Sized, W:&nbsp;?Sized, '_&gt; Future for Copy&lt;'_, R, W&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;R: AsyncRead + Unpin,<br>&nbsp;&nbsp;&nbsp;&nbsp;W: AsyncWrite + Unpin,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; Future for JoinHandle&lt;T&gt;","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()