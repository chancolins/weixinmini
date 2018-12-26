import org.jboss.netty.channel.Channel;
import org.jboss.netty.channel.ChannelHandlerContext;
import org.jboss.netty.channel.ExceptionEvent;
import org.jboss.netty.channel.MessageEvent;
import org.jboss.netty.channel.SimpleChannelHandler;

public class RobotsServerHandler extends SimpleChannelHandler {
    
    @Override
    public void messageReceived(ChannelHandlerContext ctx,MessageEvent e) throws Exception {
        Channel channel = e.getChannel();
        Object retMessage = messageHandler(e.getMessage());
        channel.write(retMessage);
    }

    @Override
    public void exceptionCaught(ChannelHandlerContext ctx,MessageEvent e) throws Exception {
        e.getCause().printStackTrace();
        e.getChannel().close();
    }
    private Object messageHandler(Object message){
        //可以进行一些自然语义分析，然后加上搜索，快速告诉客户你的答案
        //在这里我们只是简单返回，相当于ECHO的作用
        return message;
    }
}
