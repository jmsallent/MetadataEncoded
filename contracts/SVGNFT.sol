// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "./SVGFunctions.sol";
contract SVGNFT is ERC721URIStorage{
    uint256 tokenCounter;
    event CreatedSVGNFT(uint256 indexed tokenId, string tokenURI);

    constructor () ERC721("MyToken", "MTK"){
        tokenCounter = 0;
    }

    function create(string memory svg) public{
        _safeMint(msg.sender, tokenCounter);
        string memory imageURI = svgToImageURI(svg);
        _setTokenURI(tokenCounter, formatTokenURI(imageURI));
        tokenCounter = tokenCounter + 1;
        emit CreatedSVGNFT(tokenCounter, svg);
    }
    function tokenURI(uint256 tokenId)
        public
        view
        override(ERC721URIStorage)
        returns (string memory)
    {
        return super.tokenURI(tokenId);
    }

    function svgToImageURI (string memory input) public returns (string memory){
        return SVGFunctions.svgToImageURI(input);
    }
    function formatTokenURI(string memory imageURI) public returns (string memory){
        return SVGFunctions.formatTokenURI(imageURI);
    }
}