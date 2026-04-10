// ==UserScript==
// @name         New Userscript 1
// @namespace    http://tampermonkey.net/
// @version      2026-03-17
// @description  Elaborate on bullet points by user
// @author       You
// @match        *://old.reddit.com/r/explainlikeimfive/comments/3ye7j7/eli5why_is_wikipedia_considered_unreliable_yet/
// @icon         http://www.google.com/s2/favicons?sz=64&domain=reddit.com
// @grant        none
// ==/UserScript==

(function() {
    "use strict";

    let comment = document.querySelectorAll("div.usertext-body.md-container > div")[3];
    let bq = document.querySelectorAll("blockquote")[0];
    let current_year = (new Date()).getFullYear();
    let desc_x = "Your right to edit Wikipedia by swinging your sledgehammer ends at the nose of some wack nerd who is more willing to waste everyone&rsquo;s time and effort in edit wars than you. If you do not have the tenacity of someone with nothing else to do and nothing left to lose, you will not and cannot win, no matter how right or wrong you are.";

    comment.innerHTML = `
    <p><span style="background-color: yellow;">I agree with this poster, I just wanted to expand that the combination of editor bias and bad summaries of sources together (rather than in isolation) are the biggest reasons the site is unreliable. A lot of Wikipedians have their own pet sources they like; often times they haven&rsquo;t gone to the library lately, and many sources (both in print and online) have not been updated or synthesised with the current beliefs on things, so many articles end up being more representative of whatever sources were available to the editors who last touched them, and not necessarily of everything available.</span></p>

    <p><span style="background-color: yellow;">There are three massive obstacles that are almost guaranteed to eventually drive away anyone who&rsquo;s dumb enough to attempt editing Wikipedia in a serious and constructive manner:</span></p>

    <ol>
        <li>
            <p><span style="background-color: yellow;"><strong>Their sourcing policies systematically separate claims from evidence:</strong></span></p>
            <p><span style="background-color: yellow;">Wikipedia explicitly gives an extremely strong preference for secondary, tertiary, etc. sources and recently published accounts over primary sources, regardless of the topic. Both of these effectively equate to a requirement that the documentation be as distant as possible from the actual evidence. That is the exact opposite of what an expert will do, so experts are effectively prohibited from using good practice. While Wikipedia&rsquo;s policies do not forbid directly citing primary sources, some policies do firmly declare, for example, <a href="https://en.wikipedia.org/wiki/Wikipedia:No_original_research#Primary,_secondary_and_tertiary_sources"><i>&ldquo;<b>do not</b> analyze, synthesize, interpret, or evaluate material found in a primary source yourself; instead, refer to reliable secondary sources that do so.&rdquo;</i></a> This is the opposite of what experts actually do.</span></p>
        </li>
        <li>
            <p><span style="background-color: yellow;"><strong>Their core content policies are an appeal to majority:*</strong></span></p>
            <p><span style="background-color: yellow;">If you look at their policy on &ldquo;Verifiability,&rdquo; you&rsquo;ll see that their threshold for inclusion is whether or not it can be &ldquo;verified&rdquo; by &ldquo;reliable&rdquo; sources, not about whether or not it is true. So if, for example, 80% or more of &ldquo;reliable&rdquo; secondary (and beyond) sources repeat a flawed account of something, Wikipedia will perpetuate that, because content that states what is the most true or accurate will be a minority viewpoint, and it will fail verification because prioritising it will be considered &ldquo;giving it undue weight.&rdquo; This creates even more room for error:</span></p>
            <ul>
                <li>
                    <p><span style="background-color: yellow;"><strong>Textbook lag:</strong></span></p>
                    <p><span style="background-color: yellow;">Even in the hard maths and sciences, widely-used media outlets, websites, and textbooks often contain statements and conventions that are oversimplified or outright wrong, that have been propagated for a long time.* Textbooks are especially problematic, as they often lag behind the most up-to-date research by 10 years or more. Despite this, Wikipedia&rsquo;s sourcing policies work against editors trying to reflect current consensus among experts by citing papers and other primary sources directly, so they often lose to those citing popular websites and news articles.</span></p>
                </li>
                <li>
                    <p><span style="background-color: yellow;"><strong>Circular reporting:</strong></span></p>
                    <p><span style="background-color: yellow;">Also known as &ldquo;citogenesis,&rdquo; circular reporting on Wikipedia happens when journalists cite a Wikipedia article, then at some point the journalists&rsquo; articles are considered &ldquo;reliable sources,&rdquo; and then <i>those news articles get used as a reference on that Wikipedia article.</i> Since any errors that get caught in this can easily get laundered into a false consensus, media activists can (and have already) completely manufacture events and viewpoints using this vulnerability. But as well-known as this problem is, even within Wikipedia itself, their policies don&rsquo;t do a good job of preventing or deterring it, and the community don&rsquo;t seem to care that much.</span></p>
                </li>
                <li>
                    <p><span style="background-color: yellow;"><strong>No mechanisms for reliably weighing the quality of sources:</strong></span></p>
                    <p><span style="background-color: yellow;">On Wikipedia, a review article in a mid-tier journal written in 2003 and a meta-analysis in a top-tier journal written in ${current_year} would carry roughly equal weight under their sourcing policies, provided both can be considered &ldquo;reliable.&rdquo; But when editors try to weigh which sources are &ldquo;better&rdquo; or &ldquo;more reliable,&rdquo; the outcome is often decided by what, or how many, editors voted or participated in relevant discussions, not by any epistemic standard.</span></p>
                </li>
            </ul>
        </li>
        <li>
            <p><span style="background-color: yellow;"><strong>&ldquo;Dispute resolution&rdquo; is an arms race:</strong></span></p>
            <p><span style="background-color: yellow;">Bureaucracy and edit wars are won by those who are most familiar with years of rules and arbitration or willing to waste others&rsquo; time (or both), and rarely by those who are the most correct.</span></p>
        </li>
    </ol>
    <hr />
    <p><span style="background-color: yellow;">*&nbsp;Some important policies in certain areas are really, really, really bad. MOS:COMPUNITS is an excellent example of this:</span>

    <p><span style="background-color: yellow;">MOS:COMPUNITS is a a policy that is part of Wikipedia&rsquo;s Manual of Style. It governs articles about computers by telling users how file size units should be written: whether the SI units for bytes (&ldquo;kilobyte,&rdquo; &ldquo;megabyte,&rdquo; &ldquo;gigabyte,&rdquo; etc.) mean powers of 1,000 or 1,024.</span></p>

    <p><span style="background-color: yellow;">The modern standard answer to this question is <i>not ambiguous:</i> The SI prefixes (KB, MB, GB, TB etc.) mean powers of 1000 and <i>not powers of 1,024.</i> The IEC binary prefixes (KiB, MiB, GiB, TiB, etc.) means powers of 1024. This has been the internationally-accepted position since 1998, when the IEC first released their standard on the binary prefixes, and competent experts in computing will use these terms correctly and advocate for their correct usage.</span></p>

    <p><span style="background-color: yellow;">However, the industry was sloppy for a very long time: back in the early days of computing, storage and memory sizes were relatively small, so professionals in the industry could get away with calling &ldquo;KB&rdquo; 1,024 and &ldquo;MB&rdquo; 1,048,576, instead of 1,000 and 1,000,000. But as storage increased in size and density, and became more accessible to the general public, this difference of 2.4% between a KB and KiB and 4.9% between a MB and MiB, grows to 7.4% for GB vs. GiB, 10% for TB vs TiB, and 12.6% for PB vs. PiB.</span></p>

    <p><span style="background-color: yellow;">Many hard drive manufacturers, however, advertised their storage capacities using 1,000-based units, and they were actually using the terminology correctly. When professionals in the industry saw this, they chose to accuse storage manufacturers of deliberately deceiving customers, using them as a convenient scapegoat, rather than recognising and correcting their own longstanding misuse of the prefixes, a largely dishonest framing that persists even to this day. Even if the storage manufacturers using 1,000-based units <i>were</i> trying to scam customers, <i>they (mostly) spoke the truth</i> when it came to capacities.</span></p>

    <p><span style="background-color: yellow;">(What is just as problematic is the fact that, although engineers and programmers are supposed to be mature adults who prioritise facts over feelings, responses by so many of these &ldquo;professionals&rdquo; to this particular issue have frequently been of dismissiveness, blame-shifting, God complexes, and an extremely irrational and stubborn insistence that entrenched bad practice is somehow more legitimate than standards that exist precisely to ensure consistency and fix bad practices, because they think that knowing more about computing than standards bodies do somehow makes them untouchable.)</span></p>

    <p><span style="background-color: yellow;">The practical result is that whether the SI prefixes mean powers of 1,000 or 1,024 depends on which article you&rsquo;re reading, and Wikipedia doesn&rsquo;t even <i>allow</i> the use of the IEC binary prefixes in general, because in their view, &ldquo;nobody uses them, so we shouldn&rsquo;t either,&rdquo; or &ldquo;Wikipedia follows, it doesn't lead.&rdquo; This is not a neutral reflection of source usage; instead, it is an outright ban on the use of correct practice and enforcement of bad practice. Wikipedia has always been infamous for being unreliable, since allowing anyone to edit inherently makes it vulnerable to vandalism and disruptive editing, which constantly requires editors to make corrections. But another part of this is that, ironically, <i>many of their policies <b>prevent</b> people from being able to make factual corrections.</i></span></p>

    <p><span style="background-color: yellow;">MOS:COMPUNITS is a textbook example of institutionalised arrogance, and as of right now it is so ass-backwards that it desperately needs to be completely rewritten from scratch. But this policy is about articles on computers&mdash;a topic which is enormous by any measure, involves an enormous industry, an enormous number of Wikipedia articles, and an enormous number of Web pages, and where an enormous number of people have an enormous amount invested. Even <i>attempting</i> to challenge this policy in absolutely any legitimate way whatsoever is grounds for a conflict akin to a second American Civil War. Rewriting the whole thing from scratch? Forget it. ${desc_x}</span></p>

    <p><span style="background-color: yellow;"><strong><span style="padding-right: 0.05em;">END RESULT</span>:</strong> I created a Wikipedia account in 2017, and had a mostly good time editing for the next seven years. In 2024, when I discovered this policy, I tried to bring my concerns to the community, only to end up drowning in cult-like procedural resistance and condescension from people more interested in defending rules than actually engaging with my concerns. Shortly afterwards, I found that there are <i>17 entire pages</i> of arguments involving people trying to get the community to fix it, bringing forth all sorts of perfectly valid concerns (including the ones I brought up), only to be completely stonewalled. I ended up abandoning my account entirely, since I quickly realised that the outcome is almost always predictable&mdash;anyone who attempts to challenge something this entrenched will be treated as a contrarian who just wants to be crazy or different, and not as someone raising a legitimate concern. The way Wikipedia and their model works means that a thousand editors armed with an industry&rsquo;s beliefs and a majority of sources that mirror those beliefs, even if those beliefs include a long-standing, completely unjustifiable resistance towards correcting faulty practices, will somehow be considered more reliable than 10 or so people like me, approaching the question with no axe to grind, and who actually care about accuracy and consistency, going in and redoing things to modern factual standards, and if you try to be revolutionary, you will not win the arbitration process. So on Wikipedia we end up with thousands of articles about computers that use conventions which are well-sourced and widely verifiable but entirely obsolete, and MOS:COMPUNITS is just one small example out of countless others.</span></p>

    <p>Between the misinformation, <span style="background-color: yellow;">poor policies,</span> poor choices of sources, entire sections that either don&rsquo;t belong or are wholly misleading, <span style="background-color: yellow;">and their arms-race editor culture,</span> there&rsquo;s not a huge amount to salvage on Wikipedia, outside of hard maths and sciences where there are definite, capital-F Facts and Formulæ.</p>
    `;
    bq.innerHTML = `<p><span style="background-color: yellow;">${desc_x}</span></p>`;
})();
