package prova.poke;

import com.intuit.karate.junit5.Karate;

class pkRunner {
    
    @Karate.Test
    Karate PokeTest() {
        return Karate.run("pk").relativeTo(getClass());
    }    

}
