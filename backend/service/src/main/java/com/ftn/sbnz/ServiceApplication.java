package com.ftn.sbnz;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;


@SpringBootApplication
public class ServiceApplication  {

	public static void main(String[] args) {
		SpringApplication.run(ServiceApplication.class, args);
	}

	// @Bean
	// public KieContainer kieContainer() {
	// 	KieServices ks = KieServices.Factory.get();
	// 	KieContainer kContainer = ks.newKieContainer(ks.newReleaseId("com.ftn.sbnz", "kjar", "0.0.1-SNAPSHOT"));
	// 	// KieContainer kContainer = ks.newKieContainer(ks.newReleaseId("drools-spring-v2","drools-spring-v2-kjar", "0.0.1-SNAPSHOT")); 
	// 	KieScanner kScanner = ks.newKieScanner(kContainer);
	// 	kScanner.start(1000); //10_000
	// 	return kContainer;
	// 	// KieSession kSession = kContainer.newKieSession();
	// }
	
	
	
	
}
