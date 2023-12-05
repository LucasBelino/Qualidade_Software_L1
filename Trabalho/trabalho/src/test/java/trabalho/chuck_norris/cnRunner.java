package trabalho.chuck_norris;

import com.intuit.karate.junit5.Karate;

class RMRunner {
    
    @Karate.Test
    Karate ChuckNorris() {
        return Karate.run("cn").relativeTo(getClass());
    }    

}
