package com.umg.module.user.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

import com.auth0.spring.security.api.JwtWebSecurityConfigurer;

@EnableWebSecurity
@Configuration
public class SecurityConfiguration extends WebSecurityConfigurerAdapter {
	@Value(value = "${auth0.apiAudience}")
	private String apiAudience;
	@Value(value = "${auth0.issuer}")
	private String issuer;

	@Override
	protected void configure(HttpSecurity http) throws Exception {
	    JwtWebSecurityConfigurer
        .forRS256(apiAudience, issuer)
        .configure(http)
        .authorizeRequests().antMatchers(HttpMethod.POST, "/api/v1/users").permitAll()
        .antMatchers(HttpMethod.DELETE, "/api/v1/users/**").permitAll()
        .antMatchers(HttpMethod.GET, "/api/v1/users").hasAuthority("view:users")
        .antMatchers(HttpMethod.GET, "/api/v1/users/**").hasAuthority("view:user")
        .antMatchers(HttpMethod.GET, "/api/v1/credenciales").hasAuthority("view:credenciales")
        .antMatchers(HttpMethod.GET, "/api/v1/credenciales/**").hasAuthority("view:credencial")
        .antMatchers(HttpMethod.POST, "/api/v1/credenciales").permitAll()
        .antMatchers(HttpMethod.DELETE, "/api/v1/credenciales/**").permitAll()
        .antMatchers(HttpMethod.PUT, "/api/v1/credenciales/**").permitAll()
        .antMatchers(HttpMethod.PUT, "/api/v1/users/**").permitAll()
        .antMatchers(HttpMethod.GET, "/api/v1/cursos").hasAuthority("view:cursos")
        .antMatchers(HttpMethod.GET, "/api/v1/cursos/**").hasAuthority("view:curso")
        .antMatchers(HttpMethod.GET, "/api/v1/asignaciones/maestros").hasAuthority("view:maestros")
        .antMatchers(HttpMethod.GET, "/api/v1/asignaciones/maestros/**").hasAuthority("view:maestro")
        .antMatchers(HttpMethod.GET, "/api/v1/asignaciones/alumnos").hasAuthority("view:cursos")
        .antMatchers(HttpMethod.GET, "/api/v1/asignaciones/alumnos/**").hasAuthority("view:curso")
        .antMatchers(HttpMethod.POST, "/api/v1/cursos").permitAll()
        .antMatchers(HttpMethod.DELETE, "/api/v1/cursos/**").permitAll()
        .antMatchers(HttpMethod.PUT, "/api(v1/cursos").permitAll()
        .antMatchers(HttpMethod.POST, "/api/v1/asignaciones/maestros").permitAll()
        .antMatchers(HttpMethod.DELETE, "/api/v1/asignaciones/maestros/**").permitAll()
        .antMatchers(HttpMethod.PUT, "/api/v1/asignaciones/maestros").permitAll()
        .antMatchers(HttpMethod.POST,"/api/v1/asignaciones/alumnos").permitAll()
        .antMatchers(HttpMethod.DELETE,"/api/v1/asignaciones/alumnos/**").permitAll()
        .antMatchers(HttpMethod.PUT, "/api/v1/asignaciones/alumnos").permitAll()
        .anyRequest().authenticated();
	}

}