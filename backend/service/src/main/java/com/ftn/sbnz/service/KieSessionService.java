package com.ftn.sbnz.service;

import java.util.Collection;
import java.util.HashMap;

import org.kie.api.runtime.KieContainer;
import org.kie.api.runtime.KieSession;
import org.kie.api.runtime.rule.FactHandle;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class KieSessionService {

    private HashMap<String, KieSession> sessions = new HashMap<>();

    @Autowired
    private KieContainer kieContainer;

    public KieContainer getKieContainer() {
        return kieContainer;
    }

    public KieSession getKieSession(String username) {
        KieSession kieSession = null;
        kieSession = sessions.get(username);
        if (kieSession == null) {
            kieSession = kieContainer.newKieSession("rulesSession");
            sessions.put(username, kieSession);
        }

        return kieSession;
    }

    public void clearWorkingMemory(String username, String type) {
        KieSession kieSession = sessions.get(username);
        Collection<FactHandle> handlers = kieSession.getFactHandles();
        for (FactHandle handle: handlers) {
            kieSession.delete(handle);
        }
        sessions.put(username, kieSession);

    }
    
    // public KieSession generateQuerySession() {
    //     return kieContainer.newKieSession("querySession");
    // }


    public void removeKieSession(String username) {
    	try{
    	    sessions.get(username).dispose();
    	    sessions.remove(username);
        }catch(Exception e) {
    	    System.out.println("NO REGULAR SESSION");
        }
    }
}
