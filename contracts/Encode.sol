// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract Encode {
    function encode (address _address, uint256 _uint) public pure returns (bytes memory){
        return (abi.encode(_address,_uint ));
    } 

    function decode (bytes memory data) public pure returns (string memory _str1, uint _number, string memory _str2) {
        (_str1, _number, _str2) = abi.decode(data, (string, uint, string));
    }
}