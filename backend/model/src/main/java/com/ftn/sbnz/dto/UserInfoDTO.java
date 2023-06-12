package com.ftn.sbnz.dto;


import com.ftn.sbnz.model.enums.Role;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class UserInfoDTO {
    private String firstName;
    private String lastName;
    private String username;
    private Role role;
}
